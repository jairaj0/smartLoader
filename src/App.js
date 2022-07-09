import React,{useState , useEffect} from 'react';
import Box from './Components/Box/Box';

function App() {
  const [data, setData] = useState();


  const Fetch = async(page = 1) => {
      const response = await fetch(`https://page-loader-api.vercel.app/${page}`);
      const data = await response.json();
      setData(data)
  }

  useEffect(() => {
      Fetch()
  }, [])

  const onScroll = event => {
    var element = event.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      console.log(data.length);
      Fetch((data.length / 10) + 1)
    }
  };
  return (
    <div className="_body" onScroll={onScroll}>
     {data?.map((value) => <Box key={value} title={value} />)}
    </div>
  );
}

export default App;
