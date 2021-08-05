import { useLocation } from 'react-router-dom';

const useQueryParams = (): URLSearchParams => {
    const location = useLocation();
    return new URLSearchParams(location.search);
};

export default useQueryParams;
