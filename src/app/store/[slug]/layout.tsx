import { Header } from '@/components/store/Header'
import Navbar from '@/components/store/Navbar'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            <Navbar />
            {children}
        </div>
    )
}

export default layout
