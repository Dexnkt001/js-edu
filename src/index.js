/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) 
    {
      let c = config[focus];
      if(knowsProgramming == false){

      var t = 1300;
      return Math.ceil(t/c);
    }else{
      var t = 800;
      return Math.ceil(t/c);
    }
  };
  
//   const defaultStudentSpeedConfig = {
//     family: 4,
//     friends: 10,
//     normal_life: 20,
//     profession: 30,
//     carrier: 40,
//     top_peformance: 60
// }

// const problemStudentSpeedConfig = {
//     family: 2,
//     friends: 4,
//     normal_life: 8,
//     profession: 20,
//     carrier: 30
// }

// const talentedStudentSpeedConfig = {
//     normal_life: 30,
//     profession: 40,
//     carrier: 55,
//     top_peformance: 70
// }

//  function getTimeForEducation(str_1,a,b){
//    if(a){
//      var c;
//     switch(str_1){
//       case 'family': c = b.family; break;
//       case 'friends' : c = b.friends; break;
//     case 'normal_life' :c = b.normal_life; break; 
//     case 'profession' : c = b.profession; break;
//     case 'carrier' : c = b.carrier;break;
//     case 'top_peformance' : c = b.top_peformance;break;
//     default: console.log("error");
//     }
//     console.log(c)
//     var t = 300;
//     return (t/c);
//    }
//    else{
//     var c;
//     switch(str_1){
//       case 'family': c = b.family; break;
//       case 'friends' : c = b.friends; break;
//     case 'normal_life' :c = b.normal_life; break; 
//     case 'profession' : c = b.profession; break;
//     case 'carrier' : c = b.carrier;break;
//     case 'top_peformance' : c = b.top_peformance;break;
//     default: console.log("error");
//     }
//      var t = 800;
//      return (t/c);
//    } 
//    }
  //  let weeks = getTimeForEducation(focus, knowsProgramming, defaultStudentSpeedConfig);
  //  console.log(weeks);
