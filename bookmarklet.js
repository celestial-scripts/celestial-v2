javascript: (function() {
    let isOpen = false;

    function createUI() {
        const uiContainer = document.createElement('div');
        uiContainer.id = 'bookmarkletUI';
        uiContainer.style.position = 'fixed';
        uiContainer.style.top = '50%';
        uiContainer.style.left = '50%';
        uiContainer.style.transform = 'translate(-50%, -50%)';
        uiContainer.style.width = 'calc(100vw - 100px)';
        uiContainer.style.height = 'calc(100vh - 100px)';
        uiContainer.style.background = '#1a1a1a';
        uiContainer.style.color = '#fff';
        uiContainer.style.fontFamily = 'Arial, sans-serif';
        uiContainer.style.borderRadius = '15px';
        uiContainer.style.overflowY = 'auto';
        uiContainer.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.2)';
        uiContainer.style.zIndex = '9999';
        uiContainer.style.transition = 'opacity 0.5s, transform 0.5s ease-in-out, visibility 0.5s';
        uiContainer.style.opacity = '0';
        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '20px';
        closeButton.style.right = '20px';
        closeButton.style.background = '#007bff';
        closeButton.style.color = '#fff';
        closeButton.style.border = 'none';
        closeButton.style.padding = '10px 15px';
        closeButton.style.borderRadius = '5px';
        closeButton.style.cursor = 'pointer';
        closeButton.onclick = toggleUI;
        uiContainer.appendChild(closeButton);
        const header = document.createElement('h1');
        header.textContent = 'Celestial Scripts';
        header.style.textAlign = 'center';
        header.style.marginTop = '50px';
        header.style.fontSize = '36px';
        const creatorInfo = document.createElement('p');
        creatorInfo.innerHTML = 'Made by <a href="https://discord.gg/6MNKCdENgU" style="color: #44c7f4; text-decoration: none;" target="_blank">discord.gg/6MNKCdENgU</a>';
        creatorInfo.style.textAlign = 'center';
        creatorInfo.style.marginTop = '10px';
        uiContainer.appendChild(header);
        uiContainer.appendChild(creatorInfo);
        const scriptsContainer = document.createElement('div');
        scriptsContainer.style.display = 'flex';
        scriptsContainer.style.justifyContent = 'space-around';
        scriptsContainer.style.flexWrap = 'wrap';
        const scripts = [{
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmhWxuHo4_yiMJRHD1K40HOXaU5-DgHUmd4GqM2QYuwQ&s',
            name: 'edpuzzle cheat',
            script: "javascript:fetch('//cdn.jsdelivr.net/gh/ading2210/edpuzzle-answers@latest/script.js').then(function(response) { return response.text() }).then(function(text) { eval(text) })",
        }, {
            img: 'https://art.pixilart.com/7e09e5620189c96.gif',
            name: 'snake',
            script: "javascript:for(Q=64,m=b=Q*Q,a=[P=l=u=d=p=S=w=0],u=89,f=(h=j=t=(b+Q)/2)-1,(B=(D=document).body).appendChild(x=D.createElement('p')),(X=x.style).position='fixed',X.left=X.top=0,X.background='#FFF',x.innerHTML='<p></p><canvas>',v=(s=x.childNodes)[0],(s=s[1]).width=s.height=Q*5,c=s.getContext('2d'),onkeydown=onblur=F=function(e,z){z?a[f]?(w+=m,f=Math.random(l+=8)*(R=Q-2)*R|(u=0),F(f+=Q+1+(f/R|0)*2,z)):F(f):e<0?(l?--l:(y=t,t=a[t]-2,F(y)),S+=(w*=.8)/4,m=999/(u+++10),a[h+=[-1,-Q,1,Q][d=p]]?B.removeChild(x,alert('Game Over')):(F(h),F(e,j=h),v.innerHTML=P?(setTimeout(F,50,e,0),S|0):'Press P')):-e?(y=(a[e]=e<Q|e>=Q*Q-Q|!(e%Q)|e%Q==Q-1|(e==h)*2)+(e==f),e==h&&(a[j]=2+h),c.fillStyle='hsl('+!a[e]*99+','+m*2+'%,'+y*50+'%)',c.fillRect(e%Q*5,(e/Q|0)*5,5,5)):isNaN(y=e.keyCode-37)|y==43?(P=y&&!P)&&F(-1):p=!P|y&-4|!(y^2^d)?p:y;return!1};--b;F(b));void F(-1)",
        }, {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vIXdNEFKhvWCwoW3t0OHnb0mUkjCwvCsRg:https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Icons8_flat_inspection.svg/1200px-Icons8_flat_inspection.svg.png&usqp=CAU',
            name: 'index.txt to index.html converter',
            script: "javascript:(function(){var htmlCode=prompt('Enter HTML code:');if(htmlCode!==null&&htmlCode.trim()!==''){var blob=new Blob([htmlCode],{type:'text/html'});var url=window.URL.createObjectURL(blob);var a=document.createElement('a');a.href=url;a.download='downloaded.html';document.body.appendChild(a);a.click();window.URL.revokeObjectURL(url);document.body.removeChild(a);}else{alert('Invalid HTML code. Please try again.');}})();",
        }, {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVE4ouKWYdDBZrEjShQkmUQQbE2SfNQzRNfjLVkt-KISBnLSMLFn5P2Ovmpx_n82IIXI4:https://t3.ftcdn.net/jpg/04/83/72/38/360_F_483723827_GsbImqiPvUHANjDce7roBXm3yY06CSlo.jpg&usqp=CAU',
            name: 'eruda inspect',
            script: "javascript:(function () { var script = document.createElement('script'); script.src='//cdn.jsdelivr.net/npm/eruda'; document.body.appendChild(script); script.onload = function () { eruda.init() } })();",
        }, {
            img: 'https://miro.medium.com/v2/resize:fit:940/0*RA38PzdJipiQExCP.gif',
            name: 'blooket/gimkit cmd',
            script: "javascript:(function() {
                var scriptUrl = 'https://cdn.jsdelivr.net/gh/fawnchunk/wfefwewfefwe@main/loader.js';
                
                if (window.location.hostname !== 'www.google.com') {
                    var confirmRun = confirm('This script only works on Google.com. Press Cancel to be redirected to Google.com.');
                    
                    if (!confirmRun) {
                        window.location.href = 'https://www.google.com';
                    } else {
                        var script = document.createElement('script');
                        script.src = scriptUrl;
                        document.body.appendChild(script);
                    }
                } else {
                    var script = document.createElement('script');
                    script.src = scriptUrl;
                    document.body.appendChild(script);
                }
            })();
            ",
        }, {
            img: 'https://google.images/123.png',
            name: 'placeholder',
            script: "javascript:alert('Placeholder Script 1');",
        }, {
            img: 'https://google.images/123.png',
            name: 'placeholder',
            script: "javascript:alert('Placeholder Script 2');",
        }, ];
        scripts.forEach((script, index) => {
            const scriptContainer = document.createElement('div');
            scriptContainer.style.width = '250px';
            scriptContainer.style.height = '250px';
            scriptContainer.style.background = '#2c2c3d';
            scriptContainer.style.borderRadius = '15px';
            scriptContainer.style.margin = '20px';
            scriptContainer.style.overflow = 'hidden';
            scriptContainer.style.textAlign = 'center';
            scriptContainer.style.position = 'relative';
            scriptContainer.style.transition = 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out';
            const logoImg = document.createElement('img');
            logoImg.src = script.img;
            logoImg.style.width = '100px';
            logoImg.style.height = '100px';
            logoImg.style.marginTop = '20px';
            logoImg.style.borderRadius = '50%';
            logoImg.style.transition = 'transform 0.3s ease-in-out';
            const scriptName = document.createElement('h2');
            scriptName.textContent = script.name;
            scriptName.style.fontWeight = 'bold';
            scriptName.style.fontSize = '18px';
            scriptName.style.marginTop = '10px';
            const injectButton = document.createElement('button');
            injectButton.textContent = 'Inject';
            injectButton.style.background = '#28a745';
            injectButton.style.color = '#fff';
            injectButton.style.border = 'none';
            injectButton.style.padding = '8px 15px';
            injectButton.style.borderRadius = '5px';
            injectButton.style.cursor = 'pointer';
            injectButton.onclick = () => {
                injectScript(script.script);
            };
            scriptContainer.appendChild(logoImg);
            scriptContainer.appendChild(scriptName);
            scriptContainer.appendChild(injectButton);
            scriptContainer.style.boxShadow = '0 0 10px rgba(128, 0, 128, 0.8)';
            scriptsContainer.appendChild(scriptContainer);
        });
        uiContainer.appendChild(scriptsContainer);
        document.body.appendChild(uiContainer);
        setTimeout(() => {
            uiContainer.style.opacity = '1';
        }, 100);
    }

    function toggleUI() {
        isOpen = !isOpen;
        const uiContainer = document.getElementById('bookmarkletUI');
        const visibility = isOpen ? 'hidden' : 'visible';
        uiContainer.style.visibility = visibility;
        uiContainer.style.opacity = isOpen ? '0' : '1';
    }

    function injectScript(script) {
        const scriptElement = document.createElement('script');
        scriptElement.textContent = script;
        document.body.appendChild(scriptElement);
    }
    createUI();
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            toggleUI();
        }
    });
})()
