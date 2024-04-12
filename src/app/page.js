
import { Button } from "@/components/ui/button";
async function getStrapiData(path){
  const baseUrl = "http://127.0.0.1:1337";
  try{
    const response = await fetch(baseUrl+path);
    const data = await response.json();
    return data;
  }catch(error){
    console.error(error);
  }
}

export default async function Home() {
 
  const strapiData = await getStrapiData("/api/home-page");
  const { Title, description } = strapiData.data.attributes;
  console.log(strapiData);
  return (
    <div>
        <h1>{Title}</h1> 
       <p>{description}</p>
       <Button>Click me</Button>
    </div>
  ); 
}
