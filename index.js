fetch('./data.json')
   .then(response => {
      if (!response.ok) {
         throw new Error(`Error ${response.status}`);
      }

      return response.json();
   })
   .then(data => {
      console.log(data);
   }).catch( error => {
       console.error('Ошибка загрузки JSON:', error);
   });
