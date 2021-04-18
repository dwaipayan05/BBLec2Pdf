# BBLec2Pdf
Convert Big Blue Button Lecture Files by NITK to PDF using `jsPDF`

### What is this ?
A Chrome Extension/Script for you to download PDF Files of PPTs avaialable on BigBlue Button. It's a workaround to access study material since it wasn't always provided by faculties and it's a strenous procedure to download them separately. 

### How to Use ?

- Using <b>Chrome Dev Console</b>
    - Add [Console Importer](https://chrome.google.com/webstore/detail/console-importer/hgajpakhafplebkdljleajgbpdmplhie?hl=en) Extension to Chrome
    - Open Any Lecture on `https://lectures.iris.nitk.ac.in/playback/presentation/2.0/*`
    - Wait for the Page to Load
    - Press `Ctrl + Shift + J` to Open Chrome Dev Console
    - Run the Following Commands to import `jsPDF`
        ```Javascript
        $i('https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js')
        ```
    - Paste the Code from [script.js](./script.js)
<br>

- Using <b>Chrome Extension</b> (Recommended)
    
     - Download [BBLec2PdfExt](./"BBLec2PdfExt")
     - From Chrome Browser Open `chrome://extensions`
     - Turn on Developer Mode
     - Select Load Unpacked Extension Option
     - Select file Location of `BBLec2PdfExt`
     - Click On Extension Button to Download PDF.
     - It works only on `lectures.iris.nitk.ac.in`

<i>P.S : Not Yet Published on WebStore, hence locally </i> :disappointed:

#### Demo
![Demo](Demo.gif)

<b>Feel Free to Open Issues</b>


Made with :heart: by [dwaipyan05](https://github.com/dwaipayan05)
