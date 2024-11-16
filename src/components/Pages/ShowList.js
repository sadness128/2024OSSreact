import React from 'react'
import CreateList from './CreateList'
import UpdateList from './UpdateList'
import DeleteList from './DeleteList'
import $ from "jquery";
import './style.css'

export default function ShowList() {
   const getDataFromJSONFile = () => {
      const xhr = new XMLHttpRequest();
         xhr.open("GET", "https://672818af270bd0b975544fba.mockapi.io/api/v1/students");
         xhr.setRequestHeader("content-type", "application/json");
         xhr.send();

         xhr.onload = () => {
            if (xhr.status === 200){
               $("#table_students").html("<tr> <th id='tId'> # </th> <th id='tName'> 이름 </th> <th id='tAge'> 나이 </th> <th id='tMajor'> 전공 </th> <th id='tMbti'> MBTI </th> </tr>");
               let students = JSON.parse(xhr.response);
               students.forEach((item) => {
                  $("#table_students").append("<tr>" + "<td id='tId'>" + item.id + "</td>" + "<td>" + item.name + "</td>" + "<td>" + item.age + "살 </td>" + "<td>" + item.major + "</td>" + "<td>" + item.mbti + "</td>" + "</tr>");
               });
            }
         }
   }
   
  return (
   <>
      <div className="container">
      <h1> 은서와 친구들 </h1>
      <p> ₍ᐢ..ᐢ₎⊹ </p>
      <p> 。.。:+* ゜ ゜゜ *+:。.。:+* ゜ ゜゜ *+:。.。.。:+* ゜ ゜゜ </p>

      <div id="inputDiv">
         ID: <input type="text" id="id"/><br/>
      </div><br/>

      <button id="getData" className="btn btn-sm" onClick={getDataFromJSONFile}> 불러오기 </button>
      <CreateList />
      <UpdateList />
      <DeleteList />
      <br/><br/>

      <table id="table_students">
         <tr>
            <th id="tId"> # </th>
            <th id="tName"> 이름 </th>
            <th id="tAge"> 나이 </th>
            <th id="tMajor"> 전공 </th>
            <th id="tMbti"> MBTI </th>
         </tr>
      </table>

      </div>
   </>
   
    
  )
}
