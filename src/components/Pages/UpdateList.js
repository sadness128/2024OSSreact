import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import $ from "jquery";

export default function UpdateList() {

   const updateDataToJSONFile = () => {
      let id = $("#updateId").val();
         alert("ID " + id + "의 정보가 수정되었습니다^~^");
         const xhr = new XMLHttpRequest();
         xhr.open("PUT", "https://672818af270bd0b975544fba.mockapi.io/api/v1/students/" + id);
         xhr.setRequestHeader("content-type", "application/json;chatset=UTF-8");

         let data = {id:$("#updateId").val(), name:$("#updateName").val(), age:$("#updateAge").val(), major:$("#updateMajor").val(), mbti:$("#updateMbti").val()};

         xhr.send(JSON.stringify(data));
         xhr.onload = () => {
            if (xhr.status === 200){
               getDataFromJSONFile();
            }
         }
   }

   const updateClear = () => {
      $("#updateId").val("");
      $("#updateName").val("");
      $("#updateAge").val("");
      $("#updateMajor").val("");
      $("#updateMbti").val("");
   };

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
      <button id="updateData" className="btn btn-sm" data-bs-toggle="modal" data-bs-target="#updateModal"> 수정하기 </button>
      
      <div className="modal" id="updateModal">
         <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">

               <div className="modal-header">
                  <h4 className="modal-title"> 수정하기 </h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={updateClear}></button>
               </div>

               <div className="modal-body">
                  <div id="inputDiv">
                     ID: <input type="text" id="updateId" tabIndex="1"/><br/>
                     이름: <input type="text" id="updateName" tabIndex="2"/><br/>
                     나이: <input type="text" id="updateAge" tabIndex="3"/><br/>
                     전공: <input type="text" id="updateMajor" tabIndex="4"/><br/>
                     MBTI: 
                     <select id="updateMbti" tabIndex="5">
                        <option value="ISFP"> ISFP </option>
                        <option value="ISTP"> ISTP </option>
                        <option value="INFJ"> INFJ </option>
                        <option value="INFP"> INFP </option>
                        <option value="ESTP"> ESTP </option>
                        <option value="ENTJ"> ENTJ </option>
                        <option value="ISFJ"> ISFJ </option>
                        <option value="INTP"> INTP </option>
                        <option value="ISTJ"> ISTJ </option>
                        <option value="INTJ"> INTJ </option>
                        <option value="ENFP"> ENFP </option>
                        <option value="ENFJ"> ENFJ </option>
                        <option value="ESFP"> ESFP </option>
                        <option value="ESFJ"> ESFJ </option>
                        <option value="ENTP"> ENTP </option>
                        <option value="ESTJ"> ESTJ </option>
                     </select>
                  </div>
               </div>

               <div className="modal-footer">
                  <button type="button" className="btn btn-success btn-sm" data-bs-dismiss="modal" onClick={updateDataToJSONFile}>
                     수정
                  </button>
                  <button type="button" className="btn btn-danger btn-sm" data-bs-dismiss="modal" onClick={updateClear}> 취소 </button>
               </div>
            </div>
         </div>
      </div>

   </>

   )
}
