let plot = (data) => {
    const ctx = document.getElementById('myChart2');
    const dataset = {
      labels: data.daily.time, /* ETIQUETA DE DATOS */
      datasets: [{
          label: 'Temperatura diaria', /* ETIQUETA DEL GRÁFICO */
          data: data.daily.uv_index_max, /* ARREGLO DE DATOS */
          fill: false,
          borderColor: 'rgb(75, 57, 192)',
          tension: 0.1  
         
      }]
    };
    
    const config = {
        type: 'bar',
        data: dataset,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
    };
    /*const config = {
        type: 'radar',
        data: data,
        options: {
          elements: {
            line: {
              borderWidth: 3
            }
          }
        },
      };*/
    const chart = new Chart(ctx, config)
  
  };
  let load = (data) => {

  }
  let loadInocar = () => { 
  let URL = 'https://www.inocar.mil.ec/mareas/consultan.php';

  fetch(URL)
       .then(response => response.text())
        .then(data => {
           const parser = new DOMParser();
           const xml = parser.parseFromString(data, "text/html");
           console.log(xml);
        })
        .catch(console.error);
  }

(
    function () { 
       
      loadInocar();

    }
  
  )();
(
    function(){
    let URL = 'https://api.open-meteo.com/v1/forecast?latitude=-2.20&longitude=-79.89&hourly=temperature_2m&daily=uv_index_max&current_weather=true&timezone=America%2FNew_York';
    fetch( URL )
    .then(response => response.json())
    .then(data => {
        let timezone =data["timezone"]
        let timezoneHTML = document.getElementById("timezone")
        timezoneHTML.textContent = timezone;
        console.log(data);
        plot(data)
        load(data)
        //let time = data []
    })
    .catch(console.error);
    }
)();

