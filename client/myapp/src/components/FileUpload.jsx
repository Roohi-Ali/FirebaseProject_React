import React, { useState, useEffect } from 'react'

import { storage } from '../config/fb-conf';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'

const FileUpload = () => {

    const [file, setFile] = useState(null)
    const [imageList, setImageList] = useState([])

    const imageListRef = ref(storage, 'images/')

    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }

    const handleUpload = () => {
        if (file) {
            const imageRef = ref(storage, `images/${file.name + v4()}`)
            uploadBytes(imageRef, file).then(() => {
                alert('image uploaded')
            })
        }
    }

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await listAll(imageListRef)
                const urls = await Promise.all(response.items.map(async (item) => {
                    return await getDownloadURL(item)
                }))
                setImageList(urls)
            } catch (error) {
                console.error('Error fetching image URLs:', error)
            }
        }

        fetchData()
        // listAll(imageListRef).then((res)=>{
        //     res.items.forEach((item)=>{
        //         getDownloadURL(item).then((url)=>{
        //             console.log("chk")
        //             setImageList((prev)=>[...prev, url])
        //         })
        //     })
        // })
    }, [imageListRef])


    return (
        <div className='outerContainer'>
            <div className='container'>
            <p>Upload a File to FireStore</p>

            <input type='file' onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>

            <div className='imgDiv'>
                {imageList.map((url, index) => {
                    return <img key={index} src={url} />
                })}
            </div>
            </div>
        </div>
    )
}

export default FileUpload
