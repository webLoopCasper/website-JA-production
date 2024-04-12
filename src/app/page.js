import Image from "next/image";
async function test(){
  
   
fetch("http://127.0.0.1:1337/api/home-page", {
  method: "GET",
  headers: {
    'Content-Type': 'application/json', 
    
  },
})
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Der opstod en json fejl ved fetching:', error));
}
export default async function Home() {
  const data = await test();
  return (
    <div>
        <p>hej {data}</p> 
        {console.log(data)}
    </div>
  ); 
}
