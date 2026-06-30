import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar";
import CompanyCard from "./components/CompanyCard";
import JobCard from "./components/JobCard";
import Footer from "./components/Footer";
import {useEffect,useState} from 'react';
import {getCompanies} from './Services/CompanyService';
import{Company} from './types/company';

function App() {
  const[loading,setLoading] = useState(true);
  const[error,setError] = useState<string | null>(null)
  const[companies,setCompanies] = useState<Company[]>([]);

  async function fetchCompanies(){
    setLoading(true);
    try{
      const companiesData = await getCompanies();
      setCompanies(companiesData);
    }catch(error){
      setError(error );
    }finally{
      setLoading(false);
    }
  }
  
  useEffect(() => {
      fetchCompanies();
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        <NavBar />
        <Welcome />
        <CompanyCard key={companies.id}
        companies={companies} />
        <JobCard />
        <Footer />
      </div>
    );
  }
