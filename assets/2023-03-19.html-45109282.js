const e=JSON.parse('{"key":"v-2ee5fe7b","path":"/tech/ctf/2023-03-19.html","title":"","lang":"zh-CN","frontmatter":{"description":"二、Windows API ANSI的ASCII字符集及其派生字符集（也称多字节字符集）比较旧，而Unicode字符集比较新，固定以双字节表示一个字。Windows操作系统在声明一个API时，如果这个API存在字符串参数，便会指定字符集。每个含有字符串参数的API同时有两个版本：即ANSI，Unicode。尾部带A的API是ANSI版本，带W的API是Unicode版本。 例如：我们在编程时使用的MessageBox实际上是一个宏，根据字符集的不同被定义为不同版本的MessageBox，如果是UNICODE字符集，则实际上为MessasgeBoxW，如果是ANSI字符集，则实际上为MessageBoxA：","head":[["meta",{"property":"og:url","content":"https://wdh.hk/tech/ctf/2023-03-19.html"}],["meta",{"property":"og:site_name","content":"Daaihangの技术栈"}],["meta",{"property":"og:description","content":"二、Windows API ANSI的ASCII字符集及其派生字符集（也称多字节字符集）比较旧，而Unicode字符集比较新，固定以双字节表示一个字。Windows操作系统在声明一个API时，如果这个API存在字符串参数，便会指定字符集。每个含有字符串参数的API同时有两个版本：即ANSI，Unicode。尾部带A的API是ANSI版本，带W的API是Unicode版本。 例如：我们在编程时使用的MessageBox实际上是一个宏，根据字符集的不同被定义为不同版本的MessageBox，如果是UNICODE字符集，则实际上为MessasgeBoxW，如果是ANSI字符集，则实际上为MessageBoxA："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{},"readingTime":{"minutes":1.21,"words":362},"filePathRelative":"tech/ctf/2023-03-19.md","excerpt":"<p><strong>二、Windows API</strong></p>\\n<p>ANSI的ASCII字符集及其派生字符集（也称多字节字符集）比较旧，而Unicode字符集比较新，固定以双字节表示一个字。Windows操作系统在声明一个API时，如果这个API存在字符串参数，便会指定字符集。每个含有字符串参数的API同时有两个版本：即ANSI，Unicode。尾部带A的API是ANSI版本，带W的API是Unicode版本。</p>\\n<p>例如：我们在编程时使用的MessageBox实际上是一个宏，根据字符集的不同被定义为不同版本的MessageBox，如果是UNICODE字符集，则实际上为MessasgeBoxW，如果是ANSI字符集，则实际上为MessageBoxA：</p>","autoDesc":true}');export{e as data};
