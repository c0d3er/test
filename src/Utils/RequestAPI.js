/*$Id$*/
export default function(url, isInternal, isCsrfNeeded) {
  isCsrfNeeded = isCsrfNeeded!=undefined ? isCsrfNeeded : true
  var core = {
    ajax: function(method, url, args, payload, files) {
      return new Promise(function(resolve, reject) {
        var client = new XMLHttpRequest();
        var uri = url;
        var data = '';
        if (args && (method === 'POST' || method === 'PUT' || method=='PATCH')) {
          var argcount = 0;
          for (var key in args) {
            if (args.hasOwnProperty(key)) {
              if (argcount++) {
                data += '&';
              }
              data +=
                encodeURIComponent(key) + '=' + encodeURIComponent(args[key]);
            }
          }
        }
        client.open(method, uri);
        if(isCsrfNeeded){
        client.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        client.setRequestHeader(
          'X-ZCSRF-TOKEN',
          'crmcsrfparam=' + getCSRFCookie()
        );
        }

        if (isInternal) {
          client.setRequestHeader('AccessInternalParam', 'true');
        }
        if (files) {
          var data = new FormData();
          /*for (var i=0, len=files.length; i < len; i++) {
            data.append("file", files[i]);
          }*/
          data.append('file', files[0]);
          client.send(data);
        } else if (payload) {
          client.setRequestHeader(
            'Content-Type',
            'application/json;charset=UTF-8'
          );
          client.send(JSON.stringify(payload));
        } else {
          client.setRequestHeader(
            'Content-Type',
            'application/x-www-form-urlencoded'
          );
          client.send(data);
        }

        client.onload = function() {
          if (
            this.status === 200 ||
            this.status === 201 ||
            this.status === 204
          ) {
            var response = this.response ? this.response : this.responseText;
            if (response === '') {
              resolve({ responseStatus: this.status });
            }
            // else if (typeof response==='string'){
            //   resolve(response);
            // }
            else {
              resolve(JSON.parse(response));
            }
          } else {
            reject(this);
          }
        };
        client.onerror = function(e) {
          reject(this);
        };
      });
    }
  };

  return {
    get: function() {
      return core.ajax('GET', url);
    },
    patch:function(args, payload) {
      return core.ajax('PATCH', url, args, payload);
    },
    post: function(args, payload) {
      return core.ajax('POST', url, args, payload);
    },
    put: function(args, payload, files) {
      return core.ajax('PUT', url, args, payload, files);
    },
    del: function() {
      return core.ajax('DELETE', url);
    },
    attach: function(files, onProcess) {
      return core.ajax('POST', url, {}, undefined, files);
    }
  };
}
function getCSRFCookie() {
  var csrfToken = get_cookie('crmcsr'); //NO I18N
  return csrfToken;
}
function get_cookie(cookie_name) {
  var results = document && document.cookie.match(cookie_name + '=(.*?)(;|$)');
  if (results) {
    return unescape(results[1]);
  } else {
    return null;
  }
}
