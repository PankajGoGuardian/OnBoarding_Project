import React, { useEffect, useState } from 'react'
import ClassDetail from './ClassDetail'
import {useParams} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import {getData} from "/Users/pankaj.kumar/My_folder/onboarding_project/test/test/src/store/features/Data/dataSlice.js"

function ClassPage() {
    const {classId} = useParams()
    const dispatch = useDispatch()
    console.log(classId)
    const [classInfo, setClassInfo]=useState({})

    useEffect(()=>{
      dispatch(getData(classId))
    }, [])

    const data = useSelector((state)=>state.data.data.data)

    useEffect(()=>{
      if(data && data.classInfo){
        setClassInfo(data.classInfo)
      }

    }, [data])

    console.log(data)

  return (
    <div>
        <ClassDetail classInfo={classInfo}/>
    </div>
  )
}

export default ClassPage