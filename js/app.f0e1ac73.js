(function(e){function a(a){for(var r,p,s=a[0],i=a[1],u=a[2],l=0,d=[];l<s.length;l++)p=s[l],Object.prototype.hasOwnProperty.call(n,p)&&n[p]&&d.push(n[p][0]),n[p]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);o&&o(a);while(d.length)d.shift()();return c.push.apply(c,u||[]),t()}function t(){for(var e,a=0;a<c.length;a++){for(var t=c[a],r=!0,s=1;s<t.length;s++){var i=t[s];0!==n[i]&&(r=!1)}r&&(c.splice(a--,1),e=p(p.s=t[0]))}return e}var r={},n={app:0},c=[];function p(a){if(r[a])return r[a].exports;var t=r[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,p),t.l=!0,t.exports}p.m=e,p.c=r,p.d=function(e,a,t){p.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},p.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(e,a){if(1&a&&(e=p(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(p.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)p.d(t,r,function(a){return e[a]}.bind(null,r));return t},p.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return p.d(a,"a",a),a},p.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},p.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=a,s=s.slice();for(var u=0;u<s.length;u++)a(s[u]);var o=i;c.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"08b1":function(e,a,t){"use strict";t("2ab7")},"0a2f":function(e,a,t){"use strict";t("ddc8")},"0aca":function(e,a,t){},"2ab7":function(e,a,t){},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),n=(t("ac1f"),t("841c"),t("b0c0"),{class:"container"}),c={class:"col"},p={class:"card-input-container"},s={class:"col"};function i(e,a,t,i,u,o){var l=Object(r["j"])("AgendaCard"),d=Object(r["j"])("PhaseInfo");return Object(r["f"])(),Object(r["c"])("div",n,[Object(r["e"])("div",c,[Object(r["e"])("div",p,[u.selectedCard?(Object(r["f"])(),Object(r["c"])("button",{key:0,onClick:a[1]||(a[1]=function(e){return u.selectedCard=null})}," К списку ")):Object(r["d"])("",!0),Object(r["m"])(Object(r["e"])("input",{"onUpdate:modelValue":a[2]||(a[2]=function(e){return u.search=e}),type:"text",placeholder:"Введите название карты"},null,512),[[r["l"],u.search]])]),u.selectedCard?Object(r["d"])("",!0):(Object(r["f"])(!0),Object(r["c"])(r["a"],{key:0},Object(r["i"])(o.filteredCards,(function(e){return Object(r["f"])(),Object(r["c"])("div",{class:"suggestion",key:e.name,onClick:function(a){return o.selectCard(e)}},Object(r["k"])(e.name),9,["onClick"])})),128)),u.selectedCard?(Object(r["f"])(),Object(r["c"])(l,{key:1,card:u.selectedCard},null,8,["card"])):Object(r["d"])("",!0)]),Object(r["e"])("div",s,[Object(r["e"])(d)])])}t("d81d");var u=Object(r["n"])("data-v-cd36d2c2");Object(r["h"])("data-v-cd36d2c2");var o={class:"card-name"},l={class:"card-type"};Object(r["g"])();var d=u((function(e,a,t,n,c,p){return Object(r["f"])(),Object(r["c"])("div",null,[Object(r["e"])("p",o,Object(r["k"])(t.card.name),1),Object(r["e"])("p",l,Object(r["k"])("Law"===t.card.type?"Закон":"Распоряжение"),1),(Object(r["f"])(!0),Object(r["c"])(r["a"],null,Object(r["i"])(t.card.paragraphs,(function(e,a){return Object(r["f"])(),Object(r["c"])("p",{class:"card-text ".concat(e.classList),key:a},Object(r["k"])(e.text),3)})),128))])})),b={name:"AgendaCard",props:["card"]};t("0a2f");b.render=d,b.__scopeId="data-v-cd36d2c2";var f=b,h=Object(r["n"])("data-v-2a4415a0");Object(r["h"])("data-v-2a4415a0");var j=Object(r["e"])("h1",null,"Фаза политики:",-1),O=Object(r["e"])("ol",null,[Object(r["e"])("li",null,"Подсчитайте доступные голоса"),Object(r["e"])("li",null,'"когда" Вето, убийство представителя'),Object(r["e"])("li",null,'"после" поправки, некровирус'),Object(r["e"])("li",null,"голосование, транзакция (даже если не сосед)"),Object(r["e"])("li",null,"Эффект голосования, эффект поправок")],-1);Object(r["g"])();var y=h((function(e,a,t,n,c,p){return Object(r["f"])(),Object(r["c"])(r["a"],null,[j,O],64)})),m={name:"PhaseInfo"};t("a411");m.render=y,m.__scopeId="data-v-2a4415a0";var v=m;t("4e82");function g(e){return{text:e}}function w(e){return{classList:"bold center",text:e}}function L(e){return{classList:"center",text:e}}function C(e){return{classList:"yes",text:e}}function k(e){return{classList:"no",text:e}}w("Выберите игрока"),L("Выбранный игрок получает эту карту."),g("Во время каждого раунда боя владелец этой карты может перебросить любое количество кубиков; он должен уничтожить каждый отряд, который не нанёс попаданий после переброса кубиков.");var x=[{name:"Пророчество икстов",type:"Law",paragraphs:[w("Выберите игрока"),L("Выбранный игрок получает эту карту."),g('Этот игрок добавляет +1 к результатам боевых проверок своих истребителей. Когда владелец этой карты использует способность "ПРОИЗВОДСТВО", он сбрасывает эту карты, если не производит при этом хотя бы 2 истребителя.')]},{name:"Секретные архивы",type:"Directive",paragraphs:[w("Выберите игрока"),g("Выбранный игрок берет 1 карту секретной цели.")]},{name:"Новая конституция",type:"Directive",paragraphs:[L("Если на момент раскрытия этой карты политики в игре нет действующих законов, сбросьте её и раскройте новую карту с верха колоды политики."),C("За: сбросьте карты всех действующих законов. В начале следующей фазы стратегии каждый игрок переворачивает все карты планет в своей родной системе."),k("Против: ничего не происходит")]},{name:"Анти-технологическая революция",type:"Law",paragraphs:[C("За: после того, как игрок исследовал технологию, он должен уничтожить 1 свой корабль (кроме истребителей)."),k("Против: в начале следующей фазы стратегии каждый игрок переворачивает 1 карту планеты за каждую технологию, которой владеет.")]},{name:"Ростки империи",type:"Directive",paragraphs:[C("За: игроки, у которых больше всего победных очков, получают 1 победное очко."),k("Против: игроки, у которых меньше всего победных очков, получают 1 победное очко.")]},{name:"Программа поощрений",type:"Directive",paragraphs:[C("За: возьмите и раскройте 1 карту общей цели этапа 1. Выложите её рядом с картами общих целей."),k("Против: возьмите и раскройте 1 карту общей цели этапа 2. Выложите её рядом с картами общих целей.")]},{name:"Корона Эмфидии",type:"Law",paragraphs:[w("Выберите игрока"),L("Выбранный игрок получает эту карту и 1 победное очко. Другой игрок получает эту карту и 1 победное очко после того, как получил контроль над планетой в родной системе обладателя этой карты."),L("Затем предыдущий владелец этой карты теряет 1 победное очко.")]},{name:"Ограничение полномочий",type:"Law",paragraphs:[C("За: у каждого игрока на руке может быть не более 3 карт действий."),k("Против: каждый игрок сбрасывает 1 случайную карту действия с руки.")]},{name:"Раскрытие военных чертежей",type:"Law",paragraphs:[C('За: если у любого игрока есть технология солнца войны, все игроки могут игнорировать требования технологий солнца войны. Все солнца войны теряют способность "Поглощение урона".'),k("Против: каждый игрок, у которого есть технология солнца войны, сбрасывает все свои карты действий.")]},{name:"Министр торговли",type:"Law",paragraphs:[w("Выберите игрока"),L("Выбранный игрок получает эту карту."),L("После того, как владелец этой карты пополнил продукцию, он получает 1 товар за каждого соседнего игрока.")]},{name:"Утечка секретной информации",type:"Law",paragraphs:[L("Если на момент раскрытия этой карты политики в игре нет выполненных секретных целей, сбросьте её и раскройте новую карту с верха колоды политики."),w("Выберите выполненную секретную цель"),L("Выбранная секретная цель становится общей целью; выложите её карту рядом с остальными общими целями в общей игровой зоне.")]},{name:"Договор о разоружении",type:"Directive",paragraphs:[C("За: каждый игрок оставляет себе 2 дредноута и 4 крейсера и уничтожает все остальные свои отряды этих типов."),k("Против: в начале следующей фазы стратегии игроки переворачивают все карты своих планет с технологической специализацией.")]},{name:"Экономическое равенство",type:"Directive",paragraphs:[C("За: каждый игрок возвращает все свои товары в общий запас. Затем каждый игрок получает 5 товаров."),k("Против: каждый игрок возвращает все свои товары в общий запас.")]},{name:"Ограничение на передвижение",type:"Law",paragraphs:[C("За: при передвижении нельзя использовать альфа- и бета-червоточины."),k("Против: уничтожьте все ПСО в системах с червоточинами и в смежных системах.")]},{name:"Нетрадиционные меры",type:"Directive",paragraphs:[C('За: каждый игрок, проголосовавший "За", берет по 2 карты действий.'),k('Против:  каждый игрок, проголосовавший "За", сбрасывает все свои карты действий.')]},{name:"Министр науки",type:"Law",paragraphs:[w("Выберите игрока"),L("Выбранный игрок получает эту карту."),L('Когда владелец этой карты применяет основную или второстепенную способность карты стратегии "Исследование", ему не нужно тратить очки ресурсов, чтобы исследовать технологию.')]},{name:"Имперский арбитр",type:"Law",paragraphs:[w("Выберите игрока"),L("Выбранный игрок получает эту карту."),L("В конце фазы стратегии владелец этой карты может сбросить ее, чтобы обменять 1 из своих карт стратегии на 1 карту стратегии другого игрока.")]},{name:"Министр промышленности",type:"Law",paragraphs:[w("Выберите игрока"),L("Выбранный игрок получает эту карту."),L('Когда владелец этой карты размещает базу в системе, его отряды в этой системе могут использовать свою способность "ПРОИЗВОДСТВО".')]},{name:"Министр войны",type:"Law",paragraphs:[w("Выберите игрока"),L("Выбранный игрок получает эту карту."),L("Совершив действие, владелец этой карты может сбросить ее, чтобы вернуть 1 свой жетон приказа с поля в снабжение, затем он может совершить 1 дополнительное действие.")]},{name:"Министр мира",type:"Law",paragraphs:[w("Выберите игрока"),L("Выбранный игрок получает эту карту."),L("После того, как игрок активировал систему, в которой есть хотя бы 1 отряд другого игрока, владелец этой карты может сбросить ее; ход активного игрока немедленно завершается.")]},{name:"Регулирование флота",type:"Law",paragraphs:[C("За: у каждого игрока не может быть больше 4 жетонов в резерве флота."),k("Против: каждый игрок кладёт 1 жетон приказа из снабжение в свой резерв флота.")]},{name:"Осколок власти",type:"Law",paragraphs:[w("Выберите игрока"),L("Выбранный игрок получает эту карту и 1 победное очко. Другой игрок получает эту карту и 1 победное очко, когда выигрывает бой против обладателя этой карты."),L("Затем предыдущий владелец этой карты теряет 1 победное очко.")]},{name:"Оплачиваемое разоружение",type:"Directive",paragraphs:[w("Выберите планету"),L("Уничтожьте все наземные войска на выбранной планете. Затем игрок, контролирующий эту планету, получает 1 товар за каждый уничтоженный отряд.")]},{name:"Бунт",type:"Directive",paragraphs:[C('За: каждый игрок, проголосовавший "За", получает 1 победное очко.'),k('Против: каждый игрок, проголосовавший "За", теряет 1 победное очко.')]},{name:"Плановый призыв",type:"Law",paragraphs:[C("За: когда игрок производит отряды, он производит только 1 истребитель или отряд пехоты за обычную цену, а не 2."),k("Против: ничего не происходит.")]},{name:"Исследование червоточин",type:"Directive",paragraphs:[C("За: каждый игрок, у которого есть хотя бы 1 корабль в системе с червоточиной, может исследовать 1 технологию. Затем уничтожьте все корабли в системах с альфа- или бета-червоточинами."),k('Против: каждый игрок, проголосовавший "Против", возвращает 1 жетон приказа со своего планшета приказов в снабжение.')]}];x.sort((function(e,a){return e.name<a.name?-1:e.name>a.name?1:0}));var D=x,P=t("6062"),_=new P["a"](D,{keys:["name"]}),I={name:"App",components:{AgendaCard:f,PhaseInfo:v},data:function(){return{cards:D,selectedCard:null,search:""}},computed:{filteredCards:function(){return this.search?_.search(this.search).map((function(e){var a=e.item;return a})):D}},methods:{selectCard:function(e){this.selectedCard=e,this.search=""}}};t("08b1");I.render=i;var S=I;Object(r["b"])(S).mount("#app")},a411:function(e,a,t){"use strict";t("0aca")},ddc8:function(e,a,t){}});
//# sourceMappingURL=app.f0e1ac73.js.map