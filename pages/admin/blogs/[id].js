import React from 'react'
import AdminLayout from '../../../components/admin/adminLayout'
import ContentLayout1 from '../../../components/admin/contentLayout1'

function index() {
    return (
        <AdminLayout>
            <ContentLayout1 isAdmin={true}/>
        </AdminLayout>
    )
}

export default index