import React from 'react'
import $ from "jquery";

export default function DeleteList() {

   const deleteDataFromJSONFile = () => {
      let id = $("#id").val();
         alert("ID " + id + "의 정보가 삭제되었습니다ㅜ-ㅜ");
         const xhr = new XMLHttpRequest();
         xhr.open("DELETE", "https://672818af270bd0b975544fba.mockapi.io/api/v1/students/" + id);
         xhr.setRequestHeader("content-type", "application/json;chatset=UTF-8");
         xhr.send();

         xhr.onload = () => {
            if (xhr.status === 200){
               getDataFromJSONFile();
            }
         }

      $("#id").val("");
   }

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
   <button id="deleteData" className="btn btn-sm" onClick={deleteDataFromJSONFile}> 삭제하기 </button>
  )
}
