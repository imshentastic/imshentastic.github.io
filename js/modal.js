function handleClick() {
        console.log("hi");
        let div = document.createElement("div");
        let divBackground = document.createElement("div");
        divBackground.setAttribute("id","divBackground");
        div.setAttribute("id","resume");
        div.innerHTML=`<p  style="   margin: 12px auto 6px auto;   font-family: Helvetica,Arial,Sans-serif;   font-style: normal;   font-variant: normal;   font-weight: normal;   font-size: 14px;   line-height: normal;   font-size-adjust: none;   font-stretch: normal;   -x-system-font: none;   display: block;"   ><a title="View Shen Michael Resume on Scribd" href="https://www.scribd.com/document/442907430/Shen-Michael-Resume#from_embed"  style="text-decoration: underline;"></a> </p><iframe class="scribd_iframe_embed" title="Shen Michael Resume" src="https://www.scribd.com/embeds/442907430/content?start_page=1&view_mode=scroll&show_recommendations=false&access_key=key-30cdskHCLPcyquzZmf2u" data-auto-height="true" data-aspect-ratio="0.7729220222793488" scrolling="yes" width="100%" height="80%" frameborder="0"></iframe>`;
        document.getElementById("body").appendChild(divBackground);
        document.getElementById("divBackground").appendChild(div);

        document.getElementById("divBackground").onclick=handleClose;
}

function handleClose(){
    console.log("bye");
    document.getElementById("divBackground").remove();
}

    $('#myLink').click(function(){ handleClick(); return false; });

