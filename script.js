
function fetchData() {
    fetch('https://date.nager.at/api/v3/publicholidays/2023/BA')  .then(data => {
        console.log(data);
        // testiramo da li smo dobili odgovor na nas upit
        if (!data.ok) {
            throw Error('Error');
        }
        // odogovor se dobije u json formatu
        return data.json();
    }).then(objectData => {
    let tableData="";
    objectData?.map((values)=>{
      tableData+=`  <tr>
      <th scope="row">${values.date}</th>
      <th scope="row">${values.name}</th>
      

    </tr>`;
 
                 } );
                 document.getElementById('table_body').innerHTML=tableData;
                 
                })
        

            }

            // poziv funkcije
            fetchData();
            