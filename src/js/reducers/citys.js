const initState = {
  provinceData: ["Zhejiang", "Jiangsu"],
  cityData: {
    Zhejiang: ["Hangzhou", "Ningbo", "Wenzhou"],
    Jiangsu: ["Nanjing", "Suzhou", "Zhenjiang"]
  }
};
var dealCityList = function(data) {
  let obj = {
    provinceData: [],
    cityData: {}
  };

  data.forEach(item => {
    obj.provinceData.push(item.province);
  });
  obj.provinceData = [...(new Set(obj.provinceData))];
  let arr =obj.provinceData;
  for(let i=0;i<arr.length;i++ ){
    let newArr=[];
    data.forEach(item => {
      if(arr[i]===item.province){
        newArr.push(item.city);
      }
    });
    obj.cityData[arr[i]]=[...(new Set(newArr))]
  }
  console.log(obj);
  return obj;
};
export default function citys(state = initState, action) {
  if (action.type === "GETCITYLIST") {
    return dealCityList(action.data.result);
  } else {
    return state;
  }
}
