const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})


const vote_url = new URL('https://sf-pyw.mosyag.in/sse/vote/')
const results = new URL('https://sf-pyw.mosyag.in/sse/vote/stats')


const RES = new EventSource(results, header)
RES.onmessage = message => {
  //console.log(message.data);
  var votes = JSON.parse(message.data);
  total_votes = votes["cats"] + votes["dogs"] + votes["parrots"];

  //считаем котов
  votes_cats = (votes["cats"] / total_votes) * 100;
  votes_cats = votes_cats.toFixed(2);
  const progress_cats = document.querySelector('.progress-bar-success')
  progress_cats.style.cssText = `width: ${votes_cats}%;`
  progress_cats.textContent = `${votes_cats}% (${votes["cats"]})`

  //считаем собак
  votes_dogs = (votes["dogs"] / total_votes) * 100;
  votes_dogs = votes_dogs.toFixed(2);
  const progress_dogs = document.querySelector('.progress-bar-info')
  progress_dogs.style.cssText = `width: ${votes_dogs}%;`
  progress_dogs.textContent = `${votes_dogs}% (${votes["dogs"]})`

  //считаем попугаев
  votes_parrots = (votes["parrots"] / total_votes) * 100;
  votes_parrots = votes_parrots.toFixed(2);
  const progress_parrots = document.querySelector('.progress-bar-warning')
  progress_parrots.style.cssText = `width: ${votes_parrots}%;`
  progress_parrots.textContent = `${votes_parrots}% (${votes["parrots"]})`
}

function postResult(vote){
  //генерируем пустой ПОСТ запрос
  var xhr = new XMLHttpRequest();
  open_url = vote_url + vote;
  console.log(open_url);
  xhr.open("POST", open_url, true);
  xhr.send('');
  //делаем кнопки не активными
  document.querySelectorAll('[id=btn]').forEach(element=>
  element.disabled = true);
  //показываем бары голосования
  document.querySelectorAll('[class=progress]').forEach(element=>
  element.style.visibility= "visible");



};
