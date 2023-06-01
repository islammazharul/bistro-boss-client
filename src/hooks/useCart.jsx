import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
    const { user, loading } = useAuth()
    // const token = localStorage.getItem("access-token")
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: cart = [] } = useQuery({
        enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/cart?email=${user?.email}`)
            console.log(`res from axios`, res);
            return res.data;
        }
        // queryFn: async () => {

        //     const res = await fetch(`http://localhost:5000/cart?email=${user?.email}`, {
        //         headers: {
        //             authorization: `bearer ${localStorage.getItem('access-token')}`
        //         }
        //     })
        //     return res.json()
        // }
    })
    return [cart, refetch]
}

export default useCart;