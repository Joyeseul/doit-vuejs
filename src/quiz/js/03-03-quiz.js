Vue.component('child-component', {
    props: ['propsdata'],
    template: '<p>{{ propsdata }}</p>'
});

// 할일 #1
// sibling-component 를 이름으로 갖는 새로운 컴포넌트를 아래에 등록해보세요.
// options : template, props
Vue.component('sibling-component', {
    /* props 뒤에 적는 것은 v-bind: 뒤에 적는 것과 동일하구나
    *   아래처럼 적는 것과 내가 적은 것이 동일하다 */
    //props: ['propsdata'],
    //template: '<p>{{ propsdata }}</p>'
    props: ['ano'],
    template: '<p>{{ ano }}</p>'
})

let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue! passed from Parent Component',

        // 할일 #2
        // data 속성을 1개 더 지정하고 (예: anotherMessage) 임의의 문자열을 값으로 대입해보세요.
        // 새로 지정한 data 속성은 위 sibling-component에 props로 전달합니다.
        anotherMessage: '임의의 문자열'
    }
});