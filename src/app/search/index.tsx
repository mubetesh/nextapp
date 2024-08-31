import { GetServerSideProps, NextPage } from 'next';
import axios from 'axios';
import PropertyCard from '../../components/property/PropertyCard';
import PropertyFilter from '../../components/property/PropertyFilter';
import { Property } from '../../data/properties';

interface SearchPageProps {
  properties: Property[];
}

const SearchPage: NextPage<SearchPageProps> = ({ properties }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Search Results</h1>
      <PropertyFilter />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: properties } = await axios.get('http://localhost:3000/api/properties');
  return {
    props: {
      properties,
    },
  };
};

export default SearchPage;
