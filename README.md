
<head><meta charset="utf-8">></head><body"><div class="shine-editor"><h1>React Notes</h1>
<div>
<ol>
        <li><a href="https://github.com/murat-demirci/React#1-kurulum">Kurulum</a></li>
        <li><a href="https://github.com/murat-demirci/React#2-jsx-format%C4%B1">JSX Formatı</a></li>
        <li><a href="https://github.com/murat-demirci/React#3-jsx-yazim-kurallari">JSX yazim kurallari</a></li>
        <li><a href="https://github.com/murat-demirci/React#4-componentler">Componentler</a></li>
        <li><a href="https://github.com/murat-demirci/React#5-props-kullanimi">Props kullanimi</a></li>
        <li><a href="https://github.com/murat-demirci/React#6-bulma-css-k%C3%BCt%C3%BCphanesi">Bulma CSS kütüphanesi</a></li>
        <li><a href="https://github.com/murat-demirci/React#7-usestate">UseState</a></li>
        <li><a href="https://github.com/murat-demirci/React#8-useeffect">UseEffect</a></li>
        <li><a href="https://github.com/murat-demirci/React#9-usecontext--context-api-mantigi">useContext / Context API Mantigi</a></li>
        <li><a href="https://github.com/murat-demirci/React#10-learn-english-projesinin-context-api-ile-yapimi">learn-english Projesinin Context API ile Yapimi</a></li>
        <li><a href="https://github.com/murat-demirci/React#11-usereducer">useReducer</a></li>
        <li><a href="https://github.com/murat-demirci/React#12-usememo">useMemo</a></li>
        <li><a href="https://github.com/murat-demirci/React#13-usecallback">useCallback</a></li>
    </ol>
</div>

<h2>1. Kurulum</h2><div>Yeni güncelleme ile "create react app" kısmı değişiyor.</div>
<div>Proje açılışları (Vite kullanıldı):</div>
<ol>
<li>VS Code terminalden Vite'ı yükle:

</li><ol>
<li><code spellcheck="false">npm create vite@latest</code> → proje ismi → react → js</li>
</ol>
<li>Oluşan proje dosyasına <code spellcheck="false">cd</code> ile git.</li>
<li><code spellcheck="false">npm i</code> → <code spellcheck="false">install</code> sonrasında <code spellcheck="false">node_modules</code> klasörü gelir.</li>
<li><code spellcheck="false">npm run dev</code> ile proje çalıştırılır.</li>
</ol>
<div>Tüm diğer componentler "app" componentinin içinde bulunur.</div><div><br></div><div><h2>2. JSX Formatı</h2>
<div>HTML kodlarını JavaScript uzantısı olarak yazmak istediğimizde JSX formatı kullanılabilir.</div><div><br></div><div><h2>3. JSX yazim kurallari</h2>
<div><ul><li><span>JSX formatinda bir tane kapsayici element olmali.<pre class="" spellcheck="false">function App(<br>) {<br>  return (<br>    &lt;div id='kapsayici'&gt;<br>      &lt;h1&gt;Isim&lt;/h1&gt;<br>    &lt;div&gt;murat&lt;/div&gt;<br>    &lt;/div&gt;<br>  );}</pre></span></li></ul></div></div><div>
<div><ul><li><span>Html elementi yerine &lt;&gt;&lt;/&gt; (react fragment) kullanilabilir<pre class="" spellcheck="false">function App(<br>) {<br>  return (<br>    &lt;&gt;<br>      &lt;h1&gt;Isim&lt;/h1&gt;<br>    &lt;div&gt;murat&lt;/div&gt;<br>    &lt;/&gt;<br>  );<br>}<br></pre></span></li></ul></div>

<div><ul><li>Degiskenler function ve return arasinda kullanilir. Html icerisinde value degerini almak icin degisken {} icerisine yazilir. null, true, false ve undefined degerleri tarayici da basilmaz.<pre class="" spellcheck="false">function App(<br>) {<br>const students = 43000;<br>  return (<br>    &lt;&gt;<br>      &lt;h1&gt;Isim&lt;/h1&gt;<br>			&lt;p&gt;{students}&lt;/p&gt;<br>    &lt;div&gt;murat&lt;/div&gt;<br>    &lt;/&gt;<br>  );<br>}<br></pre></li></ul></div>

<div><ul><li>true/false kullanimi<pre class="" spellcheck="false" data-code-language="javascript">function App(<br>) {<br>const frag= true;<br>  return (<br>    &lt;&gt;<br>      &lt;h1&gt;Isim&lt;/h1&gt;<br>			&lt;p&gt;{students}&lt;/p&gt;<br>    &lt;div&gt;murat&lt;/div&gt;<br><br>{frag ? &lt;p&gt;{students}&lt;/p&gt;: &lt;&gt;&lt;/&gt;}<br>    &lt;/&gt;<br>  );<br>}<br></pre></li></ul></div>

<div><ul><li>Class tanimlama icin className kullanilir.<pre class="" spellcheck="false" data-code-language="javascript">function App(<br>) {<br>  return (<br>    &lt;&gt;<br>    &lt;div className='box'&gt;&lt;/div&gt;<br>    &lt;/&gt;<br>  );<br>}<br></pre></li></ul></div>

<div><ul><li>Inline css olarak verilirken obje olarak verilir. Camel Case kullanilir.<pre class="" spellcheck="false" data-code-language="javascript">function App(<br>) {<br>  return (<br>    &lt;&gt;<br>    &lt;div style={<br>			{<br>				width:'250px',<br>				height:'250px',<br>				backgroundColor:'yellow'<br>			}<br>		}&gt;&lt;/div&gt;<br>    &lt;/&gt;<br>  );<br>}<br></pre></li></ul></div>

<h2>4. Componentler</h2>
<div><ul><li>Simple react snippsetti rafc veya ffc ile temel yapi gelir.</li><li>bunu app.jsx icerisinde kullanmak icin<pre class="" spellcheck="false" data-code-language="javascript">import './App.css'<br>import { Course } from './Course'<br><br>function App(<br>) {<br><br>  return (<br>    &lt;&gt;<br>    &lt;Course/&gt;<br>    &lt;/&gt;<br>  )<br>}<br><br>export default App<br></pre></li></ul></div>


<div><ul><li>ffc ile<pre class="" spellcheck="false" data-code-language="javascript">import React from 'react'<br><br>// export const Course = () =&gt; {<br>//   return (<br>//     &lt;div&gt;Course&lt;/div&gt;<br>//   )<br>// };<br><br>function Course(<br>) {<br>    return ( &lt;div&gt;Course&lt;/div&gt; );<br>}<br><br>export default Course;<br></pre><div><pre class="" spellcheck="false" data-code-language="javascript">import './App.css'<br>import  Course  from './Course'<br><br>function App(<br>) {<br><br>  return (<br>    &lt;&gt;<br>    &lt;Course/&gt;<br>    &lt;/&gt;<br>  )<br>}<br><br>export default App<br></pre><br></div></li></ul></div>


<h2>5. Props kullanimi</h2>
<div><ul><li>Ana iskeletleri ayni olan componentlere propmslar gonderilir (degisken olarak).<pre class="" spellcheck="false" data-code-language="javascript">function App(<br>) {<br>  return (<br>    &lt;&gt;<br>      &lt;Course<br>        title="Angular" //props<br>        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br>        Alias animi similique ullam sequi maxime rem corrupti, <br>        perspiciatis excepturi facere dolor, voluptate ratione quam vitae accusantium voluptates quidem. <br>        Non, atque sequi."<br>      /&gt;<br>      &lt;Course /&gt;<br>      &lt;Course /&gt;<br>      &lt;Course /&gt;<br>    &lt;/&gt;<br></pre></li></ul></div>

<div><ul><li>propslar objede tutulur.<pre class="" spellcheck="false">function Course(props) {<br>    return ( <br>		&lt;&gt;<br>    &lt;div&gt;{props.title}&lt;/div&gt;<br>    &lt;div className='text-center'&gt;{props.description}&lt;/div&gt;<br>    &lt;/&gt;<br> );<br>}<br></pre></li></ul></div>

<div><ul><li>daha profesyonel kullanimi<pre class="" spellcheck="false" data-code-language="javascript">function Course(props) {<br>  console.log(props);<br>//   const title = props.title;<br>//   const description = props.description;<br>const {title,description} = props;<br>//title degiskeni olustur ve props.title a esitle,<br>//description degiskeni olustur ve props.description a esitle<br>  return (<br>    &lt;&gt;<br>      &lt;div&gt;{title}&lt;/div&gt;<br>      &lt;div className="text-center"&gt;{description}&lt;/div&gt;<br>    &lt;/&gt;<br>  );<br>}</pre><div>veya<pre class="" data-code-language="javascript" spellcheck="false">function Course({title,description}) {<br>//   const title = props.title;<br>//   const description = props.description;<br>// const {title,description} = props;<br>  return (<br>    &lt;&gt;<br>      &lt;div&gt;{title}&lt;/div&gt;<br>      &lt;div className="text-center"&gt;{description}&lt;/div&gt;<br>    &lt;/&gt;<br>  );<br>}<br></pre></div></li></ul></div>

<div><ul><li>image ekleme<pre class="" spellcheck="false" data-code-language="javascript">import Angular from './images/angular.jpg'<br>&lt;img src={Angular} alt="" /&gt; //kullanimi<br></pre></li></ul></div>

<div><ul><li><code spellcheck="false">⁠props</code><span>⁠ olarak direkt objenin icerigine erismek icin ust <code spellcheck="false">⁠component</code><span>⁠ de</span>:</span><pre class="" data-code-language="javascript" spellcheck="false">{<br>            courses.map((course)=&gt;{<br>                return (&lt;Course key={course.id} {...course}/&gt;)<br>            })<br>        }</pre></li><li>Alt&nbsp;<span>&nbsp;<code spellcheck="false">⁠component</code><span>⁠ de:</span></span><pre class="" data-code-language="javascript" spellcheck="false">function Course({id,content,title,price}) {<br>    console.log(id)<br>    return ( &lt;div&gt;&lt;/div&gt; );<br>}<br><br>export default Course;<br></pre><div><br></div></li></ul></div><h2>6. Bulma CSS kütüphanesi</h2>
<div><ul><li>Bulma CSS kütüphanesi, CSS frameworkleri arasında popüler bir seçenektir. İçinde birçok önceden oluşturulmuş stil ve komponentler bulundurur. Bu sayede, web uygulamalarında hızlı ve kolay bir şekilde stil ve düzen oluşturulabilir.</li><li>Bulma CSS kütüphanesini kullanarak, web uygulamalarınızı hızlı ve kolay bir şekilde düzenleyebilirsiniz.</li></ul></div>

<h2>7. UseState</h2>
<div><ul><li>UseState fonksiyonu, React'ta state kullanımını sağlar. State, component hakkında bilgi tutar ve bu bilgilerin değişmesine neden olabilir. UseState fonksiyonu, state'i tanımlar ve değiştirir. Örneğin, bir butona tıklandığında component'in rengini değiştirmek için useState kullanılabilir.</li><li>Functional component içerisinde hooks olarak state tanımlanır.</li></ul></div>

<div>useState import et. Eklentiden useStateSnippset i yaz. İlk değer güncelleştirmek istediğimiz, var olan bir değişken. useState içerisinde yazılan değer value'nun başlangıç değeridir. setValue bir fonksiyon, value'yu set etme fonksiyonudur.</div>
<pre class="" data-code-language="javascript" spellcheck="false">import { useState } from 'react'<br>import reactLogo from './assets/react.svg'<br>import viteLogo from '/vite.svg'<br>import './App.css'<br><br>function App(<br>) {<br>  const [first/*value*/, setfirst /*setValue*/] = useState(0)/*value degeri*/<br><br>  return (<br>    &lt;div className="App"&gt;<br>     <br>    &lt;/div&gt;<br>  )<br>}<br><br>export default App<br></pre>
<div><ul><li>Fonksiyon kullanımı.</li></ul></div>
<pre class="" data-code-language="javascript" spellcheck="false">function App(<br>) {<br>  const [value, setValue] = useState(0);<br>  const handleClick = (<br>) =&gt; {<br>    console.log("murat");<br>  };<br>  return (<br>    &lt;div className="App"&gt;<br>      &lt;button onClick={handleClick}&gt;Kurs Ekle&lt;/button&gt;/*birinci yontem*/<br>			&lt;button onClick={()=&gt;{console.log('murat')}&gt;Kurs Ekle&lt;/button&gt;/*ikinciyontem*/<br>      &lt;div&gt;Kurs Sayisi: {value}&lt;/div&gt;<br>    &lt;/div&gt;<br>  );<br>}<br></pre>
<div><ul><li>Genel kullanim.</li></ul></div>
<pre class="" data-code-language="javascript" spellcheck="false">function App(<br>) {<br>  const [value, setValue] = useState(0);<br><br>  const handleClick = (<br>) =&gt; {<br>    setValue(value + 1);/*butona her tiklandiginda deger 1 artar ve <br>												value degeri guncellenir*/<br>  };<br><br>  return (<br>    &lt;div className="App"&gt;<br>      &lt;button onClick={handleClick}&gt;Kurs Ekle&lt;/button&gt;<br>      &lt;div&gt;Kurs Sayisi: {value}&lt;/div&gt;<br>    &lt;/div&gt;<br>  );<br>}<br></pre>
<h2>8. UseEffect</h2>
<div><ul><li>useEffect fonksiyonu, React'ta component'lerin state'lerini ve props'larını dinlemeyi sağlar. Bu fonksiyon, component'teki herhangi bir state ya da prop değiştiğinde çalışır. Bu sayede, component'lerdeki state ve props'larının değişimlerine göre belirli işlemler gerçekleştirilebilir.</li></ul></div>
<pre class="" data-code-language="javascript" spellcheck="false">import { useState, useEffect } from 'react'<br>import reactLogo from './assets/react.svg'<br>import viteLogo from '/vite.svg'<br>import './App.css'<br><br>function App(<br>) {<br>  const [value, setValue] = useState(0);<br><br>	useEffect(() =&gt; {<br>		console.log('Component yüklendi veya value değişti.')<br>	}, [value]);/*value değiştiğinde useEffect çalışır*/<br><br>  const handleClick = (<br>) =&gt; {<br>    setValue(value + 1);<br>  };<br><br>  return (<br>    &lt;div className="App"&gt;<br>      &lt;button onClick={handleClick}&gt;Kurs Ekle&lt;/button&gt;<br>      &lt;div&gt;Kurs Sayisi: {value}&lt;/div&gt;<br>    &lt;/div&gt;<br>  );<br>}<br><br></pre>
<pre class="" spellcheck="false">useEffect(()=&gt;{<br>    /* componentler ilk kez render edildiginde calisir ve<br>    statelerde degisiklik oldugunda calisir, her zaman calisir<br>    */<br>  });<br><br>  useEffect(()=&gt;{<br>  /* componentler ilk kez render edildiginde calisir.*/<br>  },[]);<br><br>  useEffect(()=&gt;{<br>  /* componentler ilk kez render edildiginde calisir ve<br>    verilen statelerde degisiklik oldugunda calisir.<br>    */<br>  },[can]);<br></pre><h2>9. useContext / Context API Mantigi</h2></div><div><ul><li><span>Context API ile paylasilmak istenilen fonksiyon,deger, vb. degerleri istenilen yerden cagrilabilir. Propslara gerek kalmaz.</span></li></ul><ol><li><span>Once&nbsp;⁠</span><code spellcheck="false">React</code><span>⁠ import edilir.</span></li><li><span>bir degiskene&nbsp;<code spellcheck="false">⁠React.createContext({})</code><span>⁠ ile degerler/metotlar atanir.</span></span></li><li>Bu degiskene disaridan erisebilmesi icin export edilir.<pre class="" data-code-language="javascript" spellcheck="false">import React from "react";<br><br>const authContext = React.createContext({status:null,login: ()=&gt;{}});<br><br>export default authContext;</pre><div><br></div></li><li><code spellcheck="false">⁠App.jsx</code><span>⁠ icerisinde&nbsp;<code spellcheck="false">⁠AuthContext</code><span>⁠ i import et.</span></span><pre class="" data-code-language="javascript" spellcheck="false">import AuthContext from './context/auth-context'</pre><div><br></div></li><li><div><code spellcheck="false">⁠Context</code><span>⁠ in gecerli olacagi komponentleri belirlemek icin,&nbsp;<code spellcheck="false">⁠AuthContext.Provider</code><span>⁠ etiketleri arasina komponentler yazilir. Bu sayede&nbsp;<code spellcheck="false">⁠context</code><span>⁠ deki degerlere erisilebilir. Tasinacak degerler&nbsp;<code spellcheck="false">⁠value</code><span>⁠ icerisine eklenir. Bu sayede props veya data tasima ile ugrasmadan degerlere erisilebilir.</span></span></span></span><pre class="" data-code-language="javascript" spellcheck="false">&lt;AuthContext.Provider value={{status:false,login:loginAuth}}&gt;<br>      &lt;Auth/&gt;<br>    &lt;/AuthContext.Provider&gt;</pre><div><br></div></div></li><li><code spellcheck="false">⁠Auth</code><span>⁠ komponenti icerisinde kullanmak icin once&nbsp;<code spellcheck="false">⁠AuthContext</code><span>⁠ i import et. Daha sonra kullanilacak olan degiskeni ata.&nbsp;</span><i><span>⁠</span><span class="shine-highlight-red">Isimler ayni olmali.</span></i><span> <code spellcheck="false">⁠login</code><span>⁠ fonksiyonu&nbsp;<code spellcheck="false">⁠App.jsx</code><span>⁠ icerisinde tanimlanir ver calisir.</span></span></span><span class="shine-highlight">⁠</span><span class="shine-highlight">⁠</span><span class="shine-highlight">⁠</span><span class="shine-highlight-orange">⁠</span><span class="shine-highlight-orange">⁠</span><span class="shine-highlight-orange">⁠</span><span class="shine-highlight-orange">⁠</span><span class="shine-highlight">⁠</span></span><pre class="" data-code-language="javascript" spellcheck="false">import { useContext } from "react";<br>import AuthContext from "./context/auth-context";<br><br>function Auth(<br>) {<br>    const {status,login} = useContext(AuthContext);//tek bir degisken<br>    const values = useContext(AuthContext);//obje<br>    console.log(status)<br>    return ( &lt;div&gt;<br><br>    &lt;/div&gt; );<br>}<br><br>export default Auth;<br></pre><div><br></div></li></ol><h2>10. learn-english Projesinin Context API ile Yapimi</h2><div><ol><li><code spellcheck="false">⁠src</code><span>⁠ icerisine&nbsp;<code spellcheck="false">⁠context &gt; card.jsx</code><span>⁠ olusturuldu.</span></span><br></li><li><span><span><code spellcheck="false">⁠createContext</code><span>⁠ import edildi ve bir fonksiyon tanimlandi.</span><br></span></span><pre class="" data-code-language="javascript" spellcheck="false">import { createContext } from "react";<br><br>const CardsContext = createContext();<br><br>function Provider({children}){<br>    return (<br>        &lt;CardsContext.Provider&gt;<br>            {children}<br>        &lt;/CardsContext.Provider&gt;<br>    )  <br>}<br><br>export {Provider};<br>export default CardContext;</pre><div><br></div></li><li><code spellcheck="false">⁠context</code><span>⁠ e her yerden (<code spellcheck="false">⁠App.jsx</code><span>⁠ dahil</span>) erisebilmek icin&nbsp;<code spellcheck="false">⁠main.jsx</code><span>⁠ icerisine&nbsp;<code spellcheck="false">⁠Provider</code><span>⁠ import edildi.&nbsp;<code spellcheck="false">⁠App</code><span>⁠ component i&nbsp;<code spellcheck="false">⁠Provider</code><span>⁠ ile sarmalandi.</span></span></span></span></span><pre class="" data-code-language="javascript" spellcheck="false">import React from 'react'<br>import ReactDOM from 'react-dom/client'<br>import App from './App'<br>import './index.css'<br>import {Provider} from './context/card'<br><br>ReactDOM.createRoot(document.getElementById('root')).render(<br>    &lt;Provider&gt;<br>        &lt;App /&gt;<br>    &lt;/Provider&gt;<br>)<br></pre><div><br></div></li><li><div><code spellcheck="false">⁠App.jsx</code><span>⁠ icerisinde bulunan metotlar ve&nbsp;<code spellcheck="false">⁠useState</code><span>⁠ leri&nbsp;<code spellcheck="false">⁠context</code><span>⁠ icerisine al.</span></span></span><br></div></li><li>Bu metotlara ulasmak icin&nbsp;<code spellcheck="false">⁠useContext</code><span>⁠ ve&nbsp;<code spellcheck="false">⁠CardsContext</code><span>⁠ i import et.</span></span><pre class="" data-code-language="javascript" spellcheck="false">import "./App.css";<br>import CardList from "./components/CardList";<br>import "bootstrap/dist/css/bootstrap.min.css";<br>import "bulma/css/bulma.min.css";<br>import { useEffect,useContext } from "react";<br>import CardsContext from './context/card'<br><br>function App(<br>) {<br>  const {getAllData} = useContext(CardsContext);<br>  useEffect(() =&gt; {<br>    getAllData();<br>  }, []);<br><br>  return (<br>    &lt;div className="App container"&gt;<br>      &lt;CardList/&gt;<br>    &lt;/div&gt;<br>  );<br>}<br><br>export default App;<br></pre><div><br></div></li><li><div><code spellcheck="false">⁠context</code><span>⁠ icerisinde bir obje olustur. Bu obje tum degisken ve metotlari tutacak. Bunu&nbsp;<code spellcheck="false">⁠Provider</code><span>⁠ e&nbsp;<code spellcheck="false">⁠value</code><span>⁠ degeri olarak ver.</span></span></span><pre class="" data-code-language="javascript" spellcheck="false">const sharedValuesAndMethods = {<br>    card,<br>    getAllData,<br>    handleDelete,<br>    handleUpdate,<br>    handleAddClick<br>  };<br>  return &lt;CardsContext.Provider value={sharedValuesAndMethods}&gt;{children}&lt;/CardsContext.Provider&gt;;<br>}<br></pre><div><br></div></div></li><li><div><code spellcheck="false">⁠props</code><span>⁠ lar yerine kullanilmak istenilen degiskeni veya metodu ilgili component de&nbsp;<code spellcheck="false">⁠useContext</code><span>⁠ kullanarak cagir.</span></span></div></li></ol><h2>11. useReducer</h2></div><div><ol><li><code spellcheck="false">useReeducer</code>&nbsp;<code spellcheck="false">state</code><span>⁠ dondurur/gunceller.</span><pre class="" data-code-language="javascript" spellcheck="false">import { useState,useReducer } from 'react'<br>import './App.css'<br><br>const initialValue = 0;<br>const reducer = (state,action) =&gt;{<br>  switch (action) {<br>    case value:<br>      <br>      break;<br>  <br>    default:<br>      break;<br>  }<br>}<br><br>function App(<br>) {<br> const [count,dispatch] =  useReducer(reducer, initialValue);<br><br>  return (<br>    &lt;div&gt;<br>      &lt;button onClick={()=&gt;{dispatch('increment')}}&gt;+&lt;/button&gt;<br>      &lt;button onClick={()=&gt;{dispatch('decrement')}}&gt;-&lt;/button&gt;<br>      &lt;button onClick={()=&gt;{dispatch('reset')}}&gt;C&lt;/button&gt;<br>    &lt;/div&gt;<br>  )<br>}<br><br>export default App⁠</pre></li><ul><li><code spellcheck="false">useReducer</code><span>⁠ icinde bir fonksiyon ve bir baslangic degeri verilir.</span></li><li><span><code spellcheck="false">⁠reducer</code><span>⁠ fonksiyonu gelen&nbsp;<code spellcheck="false">⁠action</code><span>⁠ a gore islem yapar ve&nbsp;<code spellcheck="false">⁠state</code><span>⁠ i gunceller.</span></span></span><br></span></li><li><span><span><span><span><code spellcheck="false">⁠action</code><span>⁠,&nbsp;<code spellcheck="false">⁠dispatch</code><span>⁠ in icine verilen degerdir.</span></span><br></span></span></span></span></li><li><span><span><span><span><span><span><code spellcheck="false">⁠count</code><span>⁠ donen&nbsp;<code spellcheck="false">⁠state</code><span>⁠ i tutar.</span></span><br></span></span></span></span></span></span></li><li><span><span><span><span><span><span><span><span>Ilk basta&nbsp;<span><code spellcheck="false">state</code><span>⁠,</span></span></span>&nbsp;<code spellcheck="false">⁠initialValue</code><span>⁠ degeridir.</span><br></span></span></span></span></span></span></span></li></ul></ol><h2>12. useMemo</h2></div><div><ol><li><code spellcheck="false">⁠useMemo</code><span>⁠,&nbsp;<code spellcheck="false">⁠cache</code><span>⁠ de bulunan degeri kullanmak icin kullanilir. Ornek olarak, yazilimi yavaslatan bir fonksiyon oldugunu dusunelim. Bu fonksiyon, ilgili deger degismese bile calisir ve yazilim yavaslar. Bu durumda&nbsp;<code spellcheck="false">⁠useMemo</code><span>⁠ kullanilir.</span></span></span><pre class="" data-code-language="javascript" spellcheck="false">import { useState } from "react";<br>import "./App.css";<br><br>function App(<br>) {<br>  const [number, setNumber] = useState(0);<br>  const [dark, setDark] = useState(false);<br>  const doubleNumber = slowFunc(number);<br><br>  const theme = {<br>    backgroundColor: dark ? "#333" : "#FFF",<br>    color: dark ? "#FFF" : "#333",<br>  };<br><br>  return (<br>    &lt;div&gt;<br>      &lt;input<br>        type="number"<br>        value={number}<br>        onChange={(e) =&gt; setNumber(parseInt(e.target.value))}<br>      /&gt;<br>      &lt;button onClick={()=&gt; setDark((prevDark) =&gt; !prevDark)}&gt;<br>        Change Theme!<br>      &lt;/button&gt;<br>      &lt;div style={theme}&gt;{doubleNumber}&lt;/div&gt;<br>    &lt;/div&gt;<br>  );<br>}<br><br>function slowFunc(num){<br>  for (let i = 0; i &lt;= 100000000; i++) {<br>    return num * 2;<br>  }<br>}<br><br>export default App;<br></pre><div><br></div></li><ul><li><code spellcheck="false">⁠number</code><span>⁠ degeri degismedikce&nbsp;<code spellcheck="false">⁠useMemo</code><span>⁠&nbsp;<code spellcheck="false">⁠cache</code><span>⁠ deki degeri kullanir.</span></span></span><br></li></ul></ol><h2>13. useCallback</h2></div><div><ol><li><code spellcheck="false">⁠useMemo</code><span>⁠ benzer. Farki, geriye fonksiyon dondurur.</span><pre class="" data-code-language="javascript" spellcheck="false">import { useState,useCallback } from "react";<br>import "./App.css";<br>import NumberList from "./NumberList";<br><br>function App(<br>) {<br>  const [number, setNumber] = useState(1);<br>  const [dark, setDark] = useState(false);<br>  const getItems =useCallback(()=&gt;{<br>    return [number,number + 1, number + 2];<br>  },[number]);<br><br>  const theme = {<br>    backgroundColor: dark ? "#333" : "#FFF",<br>    color: dark ? "#FFF" : "#333",<br>  };<br><br>  return (<br>    &lt;div style={theme}&gt;<br>      &lt;input<br>        type="number"<br>        value={number}<br>        onChange={(e) =&gt; setNumber(parseInt(e.target.value))}<br>      /&gt;<br>      &lt;button onClick={()=&gt; setDark((prevDark) =&gt; !prevDark)}&gt;<br>        Change Theme!<br>      &lt;/button&gt;<br>      &lt;NumberList getItems={getItems}/&gt;<br>    &lt;/div&gt;<br>  );<br>}<br><br>export default App;<br></pre><div><br></div></li><ul><li><div><code spellcheck="false">⁠number</code><span>⁠ degistiginde&nbsp;<code spellcheck="false">⁠getItems</code><span>⁠ fonksiyonunu calistiemayi saglar.</span></span><br></div></li><li>Normalde sayfa her render edildiginde&nbsp;<code spellcheck="false">⁠getItems</code><span>⁠ da calisir. Fakat&nbsp;<code spellcheck="false">⁠useCallback</code><span>⁠ ile sadece&nbsp;<code spellcheck="false">⁠number</code><span>⁠ degistigi zaman fonksiyon calisir.</span></span></span></li></ul></ol><ul><li><code spellcheck="false">⁠useMemo</code><span>⁠ deger dondurur,&nbsp;<code spellcheck="false">⁠useCallback</code><span>⁠ fonksiyon dondurur. Aradaki en buyuk fark budur.</span></span><br></li></ul></div><div><br></div></div></div></div></body>
