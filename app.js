//박스오피스 데이터 가져오기
var boxAPI ='http://m.movie.daum.net/data/movie/movie_info/box_office.json?country=KR&startDate=20150101&endDate=20150401&pageSize=10&pageNo='
getJSON(url , function(data){
  console.log(data);
});
//템플릿 가져와 해석하기
//해석된 html을 $wrap에 넣어주기
