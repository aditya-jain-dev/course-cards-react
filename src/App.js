import {useState , useEffect} from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
import { apiUrl, filterData } from './data';
import { toast } from 'react-toastify';

const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true); // buffering
  const [category, setCategory] = useState(filterData[0].title); // initial initialise with all
  // category ke according me cards me display krvauga courses

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      // save data into a variable
      setCourses(output.data);

    } catch (error) {
      toast.error('something went wrong');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  },[]);
  
  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">

      <div>
        <Navbar />
      </div>

      <div className="bg-bgDark2">
        <Filter filterData={filterData} category={category} setCategory={setCategory}/>
      </div>

      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {loading ? <Spinner /> : <Cards courses={courses} category={category}/>}
      </div>

    </div>
  );
}

export default App;
