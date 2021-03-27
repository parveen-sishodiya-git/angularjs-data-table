var app = angular.module('plunker', ["ngTable"]);

app.controller('MainCtrl', function($scope, NgTableParams) {


              var mydata = [{name: "Moroni mydata", age: 50},
              {name: "Tiancum", age: 43},
              {name: "Jacob", age: 27},
              {name: "Nephi", age: 29},
              {name: "Enos", age: 34},
              {name: "Tiancum", age: 43},
              {name: "Jacob", age: 27},
              {name: "Nephi", age: 29},
              {name: "Enos", age: 34},
              {name: "Tiancum", age: 43},
              {name: "Jacob", age: 27},
              {name: "Nephi", age: 29},
              {name: "Enos", age: 34},
              {name: "Tiancum", age: 43},
              {name: "Jacob", age: 27},
              {name: "Nephi", age: 29},
              {name: "Enos", age: 34}];

              var yourdata = [{name: "Moroni yourdata", age: 50},
              {name: "Tiancum", age: 43},
              {name: "Jacob", age: 27},
              {name: "Nephi", age: 29},
              {name: "Enos", age: 34},
              {name: "Tiancum", age: 43},
              {name: "Jacob", age: 27},
              {name: "Nephi", age: 29},
              {name: "Enos", age: 34},
              {name: "Tiancum", age: 43},
              {name: "Jacob", age: 27},
              {name: "Nephi", age: 29},
              {name: "Enos", age: 34},
              {name: "Tiancum", age: 43},
              {name: "Jacob", age: 27},
              {name: "Nephi", age: 29},
              {name: "Enos", age: 34}];


  let data2 = [{name: "Moroni", age: 50, dob:"11/10/2020"},
              {name: "Tiancum", age: 43, dob:"11/10/2020"},
              {name: "Jacob", age: 27, dob:"11/10/2020"},
              {name: "Nephi", age: 29, dob:"11/10/2020"},
              {name: "Enos", age: 34, dob:"11/10/2020"},
              {name: "Tiancum", age: 43, dob:"11/10/2020"},
              {name: "Jacob", age: 27, dob:"11/10/2021"},
              {name: "Nephi", age: 29, dob:"11/10/2020"},
              {name: "Enos", age: 34, dob:"11/10/2020"},
              {name: "Tiancum", age: 43, dob:"11/10/2020"},
              {name: "Jacob", age: 27, dob:"11/10/2021"},
              {name: "Nephi", age: 29, dob:"11/10/2020"},
              {name: "Enos", age: 34, dob:"11/10/2020"},
              {name: "Tiancum", age: 43, dob:"11/10/2020"},
              {name: "Jacob", age: 27, dob:"11/10/2020"},
              {name: "Nephi", age: 29, dob:"11/10/2020"},
              {name: "Enos", age: 34, dob:"11/10/2020"}]

    $scope.editData = (user) => {
        $scope.editId = user.id;
    }          

    let dataa = [
        {
            id:"12",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2019",
                sequenceNumber:"16"
            },
            missionName:"Op Sankalp16/2019",
            commenceDate:"16/03/2019",
            concludeDate:"16/05/2019"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"17",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2019",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"33",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        }
    ];         
    
    let datas = [
        {
            id:"12",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2019",
                sequenceNumber:"16"
            },
            missionName:"Op Sankalp16/2019",
            commenceDate:"16/03/2019",
            concludeDate:"16/05/2019"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"17",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2019",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"33",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        },{
            id:"13",
            missionType:{
                name:"Op Sankalp"
            },
            sequnce:{
                sequenceType:"year",
                sequenceYear:"2020",
                sequenceNumber:"1"
            },
            missionName:"Op Sankalp1/2020",
            commenceDate:"16/03/2020",
            concludeDate:"16/05/2020"
        }
    ];         



  $scope.tableParamsmydata = new NgTableParams({}, { dataset: mydata});   
  $scope.tableParamsyourdata = new NgTableParams({}, { dataset: yourdata});   
  


});