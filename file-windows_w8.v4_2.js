function removerscript(){var a=document.getElementById("TEMPORAL"),t=a.parentNode;t.removeChild(a)}function incluirscript(a){1==firsttime&&removerscript(),document.getElementById("daftar-isi-wrap").innerHTML="<div id='loadingscript'>Loading...</div>",document.getElementById("paginacion").innerHTML="",document.getElementById("totales").innerHTML="";var t=a*jumlahposting-(jumlahposting-1),i=urlblog+"/feeds/posts/default?start-index="+t;i+="&max-results="+jumlahposting,i+="&orderby=published&alt=json-in-script&callback=showpageposts";var r=document.createElement("script");r.setAttribute("type","text/javascript"),r.setAttribute("src",i),r.setAttribute("id","TEMPORAL"),document.getElementsByTagName("head")[0].appendChild(r),firsttime=1,daftarisictual=a}function paginacion(){if(contadorP=0,salida="",daftarisictual>1?salida+="<a class='nextprev-link' href='javascript:incluirscript("+parseInt(daftarisictual-1)+")'>Prev</a>":salida+="<span class='nextprev-link'>Prev</span>",nextprev<maxpaginas+1)for(contadorP=1;contadorP<=nextprev;contadorP++)contadorP==daftarisictual?salida+="<span class='actual'>"+contadorP+"</span>":salida+="<a href='javascript:incluirscript("+contadorP+")'>"+contadorP+"</a>";else if(nextprev>maxpaginas-1)if(daftarisictual<minpaginas){for(contadorP=1;contadorP<maxpaginas-2;contadorP++)contadorP==daftarisictual?salida+="<span class='actual'>"+contadorP+"</span>":salida+="<a href='javascript:incluirscript("+contadorP+")'>"+contadorP+"</a>";salida+=" ... ",salida+="<a href='javascript:incluirscript("+parseInt(nextprev-1)+")'>"+parseInt(nextprev-1)+"</a>",salida+="<a href='javascript:incluirscript("+nextprev+")'>"+nextprev+"</a>"}else if(nextprev-(minpaginas-1)>daftarisictual&&daftarisictual>minpaginas-1){for(salida+="<a href='javascript:incluirscript(1)'>1</a>",salida+="<a href='javascript:incluirscript(2)'>2</a>",salida+=" ... ",contadorP=daftarisictual-2;contadorP<=daftarisictual+2;contadorP++)contadorP==daftarisictual?salida+="<span class='actual'>"+contadorP+"</span>":salida+="<a href='javascript:incluirscript("+contadorP+")'>"+contadorP+"</a>";salida+=" ... ",salida+="<a href='javascript:incluirscript("+parseInt(nextprev-1)+")'>"+parseInt(nextprev-1)+"</a>",salida+="<a href='javascript:incluirscript("+nextprev+")'>"+nextprev+"</a>"}else for(salida+="<a href='javascript:incluirscript(1)'>1</a>",salida+="<a href='javascript:incluirscript(2)'>2</a>",salida+=" ... ",contadorP=nextprev-(minpaginas+1);contadorP<=nextprev;contadorP++)contadorP==daftarisictual?salida+="<span class='actual'>"+contadorP+"</span>":salida+="<a href='javascript:incluirscript("+contadorP+")'>"+contadorP+"</a>";daftarisictual<contadorP-1?salida+="<a class='nextprev-link' href='javascript:incluirscript("+parseInt(daftarisictual+1)+")'>Next</a>":salida+="<span class='nextprev-link'>Next</span>",document.getElementById("paginacion").innerHTML=salida;var a=daftarisictual*jumlahposting-(jumlahposting-1),t=daftarisictual*jumlahposting,i="Total Posting: "+maxposts+" - tampilkan posting dari "+a+" a "+t;document.getElementById("totales").innerHTML=i}function showpageposts(a){var t,i,r,n,s="";0==nextprev&&(maxposts=parseInt(a.feed.openSearch$totalResults.$t),nextprev=parseInt(maxposts/jumlahposting)+1);for(var e=0;e<jumlahposting&&e!=a.feed.entry.length;e++){t=a.feed.entry[e],i=t.title.$t;for(var c=0;c<t.link.length;c++)if("alternate"==t.link[c].rel){r=t.link[c].href;break}n="media$thumbnail"in t?t.media$thumbnail.url:thumbs,s+="<div class='box-posting'>",s+="<a href='"+r+"'><img src='"+n+"' /></a>",s+="<div class='judul-posting'><a href='"+r+"'>"+i+"</a></div>",s+="</div>"}document.getElementById("daftar-isi-wrap").innerHTML=s,paginacion()}var firsttime=0,daftarisictual=1,nextprev=0,maxposts=0;onload=function(){incluirscript(1)},document.write('<div id="daftar-isi-body"><div id="daftar-isi-wrap"></div><div style="clear:both;"></div><div id="paginacion"></div><div id="totales"></div></div>');