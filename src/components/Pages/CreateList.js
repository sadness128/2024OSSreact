import React from 'react'
import $ from "jquery";

export default function CreateList() {
   const createDataToJSONFile = () => {
      const xhr = new XMLHttpRequest();
         xhr.open("POST", "https://672818af270bd0b975544fba.mockapi.io/api/v1/students");
         xhr.setRequestHeader("content-type", "application/json;chatset=UTF-8");

         let data = {id:$("#createId").val(), name:$("#createName").val(), age:$("#createAge").val(), major:$("#createMajor").val(), mbti:$("#createMbti").val()};

         xhr.send(JSON.stringify(data));
         xhr.onload = () => {
            if (xhr.status === 201){
               getDataFromJSONFile();
            }
         }

         createClear();
   }

   const createClear = () => {
      $("#createId").val("");
      $("#createName").val("");
      $("#createAge").val("");
      $("#createMajor").val("");
      $("#createMbti").val("");
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
   <>
      <button id="createData" className="btn btn-sm" data-bs-toggle="modal" data-bs-target="#createModal"> 추가하기 </button>

      <div className="modal" id="createModal">
         <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">

               <div className="modal-header">
                  <h4 className="modal-title"> 추가하기 </h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={createClear}></button>
               </div>

               <div className="modal-body">
                  <div id="inputDiv">
                     ID: <input type="text" id="createId" tabIndex="1"/><br/>
                     이름: <input type="text" id="createName" tabIndex="2"/><br/>
                     나이: <input type="text" id="createAge" tabIndex="3"/><br/>
                     전공: <input type="text" id="createMajor" tabIndex="4"/><br/>
                     MBTI: 
                     <select id="createMbti" tabIndex="5">
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
                  <button type="button" className="btn btn-success btn-sm" data-bs-dismiss="modal" onClick={createDataToJSONFile}>
                     추가
                  </button>
                  <button type="button" className="btn btn-danger btn-sm" data-bs-dismiss="modal" onClick={createClear}> 취소 </button>
               </div>
            </div>
         </div>
      </div>
   </>

   
  )
}
