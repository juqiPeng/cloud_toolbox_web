import { urls } from "../../utils/api";
import { baseRequest } from "../../utils/request";



export const pdf_to_image = (filename) =>
baseRequest()
  .get(urls.convert, { 
      params: { 
          target_ext: 'image',  
          origin_filename: filename
      },
      responseType: 'blob',
      headers:{ 'Content-Type': 'application/json; application/octet-stream'}
  })
  .then((res) => {
      console.log("response: ", res);
      let url = window.URL.createObjectURL(new Blob([res.data])); 
      let link = document.createElement("a");
      link.style.display = "none";
      link.href = url;  
      link.download = filename.substring(0, filename.length - 5) + ".zip";   
      document.body.appendChild(link);
      link.click();
});