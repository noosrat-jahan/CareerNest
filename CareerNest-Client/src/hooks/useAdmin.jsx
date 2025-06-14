import { AuthContext } from '@/Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';

const useAdmin = () => {

    const {user} = useContext(AuthContext)
    console.log(user)

    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async()=>{
            const res = await axios.get(`https://career-nest-server-one.vercel.app/users/admin/${user?.email}`)
            console.log(res)
            return res.data.isAdmin
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;