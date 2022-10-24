import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.2a2a5166.js";const e={},p=t(`<h1 id="_03-react\u7684for\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#_03-react\u7684for\u5FAA\u73AF" aria-hidden="true">#</a> 03 react\u7684for\u5FAA\u73AF</h1><div class="custom-container tip"><p class="custom-container-title">\u7279\u70B9</p><ol><li>\u4E86\u89E3\u5728react\u662F\u5982\u4F55\u4F7F\u7528for\u5FAA\u73AF\u7684</li><li>vue\u548Creact\u7684for\u5FAA\u73AF\u6709\u4EC0\u4E48\u4E0D\u4E00\u6837</li><li>react\u7684for\u5FAA\u73AF\u6709\u51E0\u79CD\u5B9E\u73B0\u65B9\u5F0F</li></ol></div><h2 id="\u6848\u4F8B\u4E8C-\u7535\u5F71\u5217\u8868\u5B9E\u73B0\u65B9\u5F0F\u4E00" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B\u4E8C-\u7535\u5F71\u5217\u8868\u5B9E\u73B0\u65B9\u5F0F\u4E00" aria-hidden="true">#</a> \u6848\u4F8B\u4E8C \u7535\u5F71\u5217\u8868\u5B9E\u73B0\u65B9\u5F0F\u4E00</h2><ul><li>\u5229\u7528js\u4E2D\u7684for\u8FDB\u884C\u5FAA\u73AF</li></ul><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">

    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../lib/react.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../lib/react-dom.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../lib/babel.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">

    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/babel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      const root = ReactDOM.createRoot(document.querySelector(&#39;#root&#39;))

      class App extends React.Component {
        constructor() {
          super()

          this.state = {
            movies: [&#39;\u661F\u9645\u7A7F\u8D8A&#39;, &#39;\u6D41\u6D6A\u5730\u7403&#39;, &#39;\u789F\u4E2D\u8C0D&#39;, &#39;\u706B\u661F\u6551\u63F4&#39;],
          }
        }

        // \u6E32\u67D3
        render() {
          // 1. \u65B9\u6CD5\u4E00
          const liEls = []
          for (let i = 0; i &lt; this.state.movies.length; i++) {
            const movie = this.state.movies[i]
            const liEl = &lt;li&gt;{movie}&lt;/li&gt;
            liEls.push(liEl)
          }
          return (
            &lt;div&gt;
              &lt;h2&gt;\u7535\u5F71\u5217\u8868&lt;/h2&gt;
              &lt;ul&gt;{liEls}&lt;/ul&gt;
            &lt;/div&gt;
          )
        }
      }

      root.render(&lt;App /&gt;)
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65B9\u5F0F\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F\u4E8C" aria-hidden="true">#</a> \u65B9\u5F0F\u4E8C</h2><ul><li>\u5229\u7528map\u8FDB\u884C\u5FAA\u73AF</li></ul><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">

    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../lib/react.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../lib/react-dom.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../lib/babel.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">

    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/babel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      const root = ReactDOM.createRoot(document.querySelector(&#39;#root&#39;))

      class App extends React.Component {
        constructor() {
          super()

          this.state = {
            movies: [&#39;\u661F\u9645\u7A7F\u8D8A&#39;, &#39;\u6D41\u6D6A\u5730\u7403&#39;, &#39;\u789F\u4E2D\u8C0D&#39;, &#39;\u706B\u661F\u6551\u63F4&#39;],
          }
        }

        // \u6E32\u67D3
        render() {
          // 2. \u65B9\u6CD5\u4E8C
          const liEls = this.state.movies.map((movie) =&gt; &lt;li&gt;{movie}&lt;/li&gt;)
          return (
            &lt;div&gt;
              &lt;h2&gt;\u7535\u5F71\u5217\u8868&lt;/h2&gt;
              &lt;ul&gt;{liEls}&lt;/ul&gt;
            &lt;/div&gt;
          )
        }
      }

      root.render(&lt;App /&gt;)
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65B9\u5F0F\u4E09" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F\u4E09" aria-hidden="true">#</a> \u65B9\u5F0F\u4E09</h2><ul><li>\u5176\u5B9E\u8BE5\u65B9\u5F0F\u8DDF\u65B9\u5F0F\u4E8C\u4E00\u6837\u53EA\u662F\u76F4\u63A5\u5728return\u91CC\u9762\u76F4\u63A5\u5199</li></ul><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">

    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../lib/react.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../lib/react-dom.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../lib/babel.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">

    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/babel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      const root = ReactDOM.createRoot(document.querySelector(&#39;#root&#39;))

      class App extends React.Component {
        constructor() {
          super()

          this.state = {
            movies: [&#39;\u661F\u9645\u7A7F\u8D8A&#39;, &#39;\u6D41\u6D6A\u5730\u7403&#39;, &#39;\u789F\u4E2D\u8C0D&#39;, &#39;\u706B\u661F\u6551\u63F4&#39;],
          }
        }

        // \u6E32\u67D3
        render() {
          return (
            &lt;div&gt;
              &lt;h2&gt;\u7535\u5F71\u5217\u8868&lt;/h2&gt;
              &lt;ul&gt;
                {this.state.movies.map((movie) =&gt; (
                  &lt;li&gt;{movie}&lt;/li&gt;
                ))}
              &lt;/ul&gt;
            &lt;/div&gt;
          )
        }
      }

      root.render(&lt;App /&gt;)
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),l=[p];function i(c,o){return s(),a("div",null,l)}var d=n(e,[["render",i],["__file","react03.html.vue"]]);export{d as default};
