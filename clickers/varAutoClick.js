setTimeout(function(){var n,e=prompt("Autoclick speed? Less is faster"),t=0,l=0,c=setInterval(function(){null!=n&&null!=n&&n.click()},e);document.body.addEventListener("keyup",function(e){"`"==e.key&&(null!=c?(clearInterval(c),c=void 0,alert("Stopped clicking")):c=setInterval(function(){null!=n&&null!=n&&n.click()},e))}),document.body.addEventListener("mousemove",function(e){t=e.clientX,l=e.clientY,n=document.elementFromPoint(t,l)})});