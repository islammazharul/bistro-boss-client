import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const useCart = () => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem("access-token")

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/cart?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json()
        }
    })
    return [cart, refetch]
}

export default useCart;