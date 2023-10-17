const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return res.json();
};


//create a delay
const wait=async (ms:number) => new Promise((resolve) => setTimeout(resolve,ms))

const session=null;

const page = async () => {

    await wait(3000)
  const data = await getData();

  if(!session)
  throw new Error('not Authorized')

  return (
    <div className="flex flex-col items-center">
      <h1>Learning page</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default page;
