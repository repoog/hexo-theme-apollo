## hexo-theme-apollo

### 主题介绍

这是在 [hexo-theme-apollo](https://github.com/chongshengsun/hexo-theme-apollo) 基础上修改的Hexo博客主题项目，修改遵循了原项目简约的风格，并尽可能采用本地的最小化资源。

修改内容包括：
* 删除Google分析功能；
* 删除duoshuo、disqus留言功能；
* 升级JS引擎版本至Pug；
* 增加utterances留言插件；
* 增加文章字数统计和阅读时间配置；
* 增加文章分类和标签功能；
* 简化和优化部分模板页面；
* 优化Head页面和Archive页面布局；

### 主题安装

``` bash
hexo init Blog 
cd Blog 
npm install
npm install --save hexo-renderer-pug hexo-generator-archive hexo-generator-feed hexo-generator-sitemap
git clone https://github.com/repoog/hexo-theme-apollo.git themes/apollo
```
上面的前两个npm包（hexo-renderer-pug和hexo-generator-archive）是必须安装的，涉及到博客页面渲染和导航中的Archive页面，后两个npm包（hexo-generator-feed、hexo-generator-sitemap）根据需要安装，前者用于创建博客的RSS订阅功能，后者用于生成博客的站点地图。

### 主题启用

修改hexo主目录下 `_config.yml` 的 `theme` 配置项为 `apollo`：

``` yaml
theme: apollo

# 在归档页面显示所有文章
# 需要上面安装的 hexo-generator-archive 插件支持
archive_generator:
    per_page: 0
    yearly: false
    monthly: false
    daily: false
```

### 主题配置

`theme\apollo`目录下的`_config.yml`文件是主题的配置文件：

``` yaml
# 博客主菜单及社交账户链接，可以自定义，个数不建议超过6个。
# 社交账户链接必须以http或https开头。
menu:
  Blog: /
  Archive: /archives/
  Twitter: https://twitter.com/repoog
  GitHub: https://github.com/repoog
  YouTube: https://www.youtube.com/@r3p00g
  RSS: /atom.xml

# favicon图标路径。
favicon: /favicon.png
# 推荐的favicon图标大小是60*60像素。
logo: /favicon.png

# 字数统计功能，enable是true为启用，是false为禁用。
wordcount:
  enable: true
  # Average Word Length: ZH≈2, EN≈5
  awl: 2
  # Words Per Minute
  wpm: 60

# utterances留言插件，默认是启用。
# repo是您博客在GitHub的项目名称，如下方示例。
# label选择默认即可。
utterances:
  enable: true
  repo: repoog/repoog-blog
  label: Comment

# 博客底部版本信息开始运行的年份，如2019-2024。
startYear: 2019
```

### 更新

``` bash
cd themes/apollo 
git pull
```

### License

MIT