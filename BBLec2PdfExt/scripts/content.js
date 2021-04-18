chrome.runtime.onMessage.addListener(TriggerReceived);

function TriggerReceived(request, sender, sendResponse) {
    console.log(request.text);

    if(request.text == "Injecting Script") {
        var lecturetitle = document.getElementById('recording-title').innerHTML;
        var thumbnail = document.getElementsByClassName('thumbnail-wrapper');
        var imageUrls = new Array();
        var x = 0;

        var dict = [];

        var maxheight = 0;
        var maxwidth = 0;

        for (var i = 0; i < thumbnail.length; i++) {
        
        var thumbnailDiv = thumbnail[i];
        var image = thumbnailDiv.getElementsByTagName("img")[0];
        var imgname = image.src.replace(/^.*[\\\/]/, '');
        var source = image.src;
        
        var curr_ht = image.naturalHeight;
        var curr_wd = image.naturalWidth;
        
        
    
        if(!(imgname in dict))
        {           
            imageUrls[x] = source;
            dict[imgname] = source;
            x++;    
        }

        maxheight = Math.max(maxheight, curr_ht);
        maxwidth = Math.max(maxwidth, curr_wd);

    }

        console.log(dict);
        function pix2mm(val){
            return (val*0.2645833333);
        }
        async function savePdf() {
            const multiPng = await generatePdf(imageUrls);
            multiPng.save(lecturetitle);
            alert("Downloading " + lecturetitle + ".pdf");
        }

        async function addImageProcess(src) {
            return new Promise((resolve, reject) => {
                let img = new Image();
                img.src = src;
                img.onload = () => resolve(img);
                img.onerror = reject;
            
            });
        }
        
        async function generatePdf(imageUrls) {
            var orientation;
            if(maxwidth >= maxheight)
            {
                orientation = 'landscape';
            }

            else if ( maxwidth < maxheight)
            {
                orientation = 'portrait'
            }

            var width_mm = pix2mm(maxwidth);
            var height_mm = pix2mm(maxwidth);
            const doc = new jsPDF(orientation, 'mm', [width_mm, height_mm], true);
            

            for (const [i, url] of imageUrls.entries()) {
                const image = await addImageProcess(url);
                var filename = image.src.replace(/^.*[\\\/]/, '');
                console.log("Fetching " + filename);
                img_ht = pix2mm(image.naturalHeight);
                img_wt = pix2mm(image.naturalWidth);
                doc.addImage(image, "png", 0, 0, img_wt, img_ht, null, 'FAST' );
                if (i !== imageUrls.length - 1) {
                    doc.addPage();
                }
            }
            return doc;
        }
        
        savePdf().then(console.log("Saved"));
    }




}
