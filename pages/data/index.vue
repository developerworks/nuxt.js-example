
<template>
  <div class="root">
    <div class="header ">
      <div class="header-logo"> <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNjQgNjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZGRkZGO30NCgkuc3Qxe2ZpbGw6IzJEOENFRjt9DQoJLnN0MntmaWxsOiMyREY1QkU7fQ0KPC9zdHlsZT4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01MywwSDExQzQuOSwwLDAsNC45LDAsMTF2NTNoNTNjNi4xLDAsMTEtNC45LDExLTExVjExQzY0LDQuOSw1OS4xLDAsNTMsMHoiLz4NCjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yNC40LDE1LjFjLTEsMC0xLjksMC44LTEuOSwxLjl2NC41YzAsMSwwLjgsMS45LDEuOSwxLjloNC4zdjI4LjRoOC4yYzAsMCwwLDAsMCwwVjIzLjNoMTIuMw0KCWMxLDAsMS45LTAuOCwxLjktMS45di02LjRIMjQuNHoiLz4NCjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xOC4xLDIzLjNoLTQuNWMtMSwwLTEuOS0wLjgtMS45LTEuOXYtNi4zaDYuM2MxLDAsMS45LDAuOCwxLjksMS45djQuNUMyMCwyMi41LDE5LjEsMjMuMywxOC4xLDIzLjN6Ii8+DQo8L3N2Zz4NCg=="> <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNHB4IiBoZWlnaHQ9IjY0cHgiIHZpZXdCb3g9IjAgMCA0IDY0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MS4yICgzNTM5NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+bGluZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuNSI+CiAgICAgICAgPGcgaWQ9IuW6lOeUqOamguiniCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyOC4wMDAwMDAsIC00MC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9ImxvZ28iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLjAwMDAwMCwgMzAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0ibGluZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODguMDAwMDAwLCAxMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMiwwIEwyLDIwIiBpZD0iTGluZSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMiw0NCBMMiw2NCIgaWQ9IkxpbmUtQ29weSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBmaWxsPSIjRkZGRkZGIiBjeD0iMiIgY3k9IjMyIiByPSIyIj48L2NpcmNsZT4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" class="header-logo-line">
        <div class="header-logo-title">
          <h3>应用统计分析</h3>
          <h4>AppAnalytics</h4>
        </div>
      </div>
      <div class="header-aside">
        <div class="header-aside-phone">
          <i class="td-appfont icon-phone"></i>
          <div class="header-aside-code">
            <div class="code-box">
              <p style="margin-bottom=11px">TalkingData客户端</p> <img src="/spa/analytics/static/img/app.240d4dd.png">
              <p style="margin-top=4px">扫码下载</p>
            </div>
            <div class="code-box">
              <p style="margin-bottom=11px">微信企业服务号</p> <img src="/spa/analytics/static/img/mobile-station.e520316.jpg">
              <p style="margin-bottom=4px">扫码关注</p>
            </div>
          </div>
        </div>
        <div style="display:inline-block" class="no-badgeStyle">
          <!--v-start-->
          <span class="ivu-badge">
            <i class="td-appfont icon-notifications"></i>
            <sup class="ivu-badge-dot"></sup>
          </span>
          <!--v-if-->
          <!--v-end-->
          <!--v-component-->
        </div>
        <a class="header-aside-setting" title="邀请工作伙伴共同查阅数据" href="#!/account/main/index">
          <i class="td-appfont icon-authorization"></i>
        </a>
        <div class="ivu-dropdown">
          <div>
            <a class="header-aside-main" href="javascript:void(0)">
              <i class="td-appfont icon-user"></i>
              <i class="ivu-icon ivu-icon-ios-arrow-down"></i>
              <!--v-component-->
            </a>
          </div>
          <div class="ivu-select-dropdown slide-up-transition" style="display: none;">
            <ul class="ivu-dropdown-menu" slot="list" style="width: 186px;">
              <i class="td-appfont icon-user"></i>
              <span>Guest</span>
              <div class="header-aside-dropdown ivu-row">
                <button class="ivu-btn ivu-btn-ghost" type="button">
                  <!--v-if-->
                  <!--v-if-->
                  <span>账户中心</span>
                  <!--v-if-->
                </button>
                <!--v-component-->
                <button class="r ivu-btn ivu-btn-ghost" type="button">
                  <!--v-if-->
                  <!--v-if-->
                  <span>退出登录</span>
                  <!--v-if-->
                </button>
                <!--v-component-->
              </div>
              <!--v-component-->
            </ul>
            <!--v-component-->
          </div>
          <!--v-component-->
        </div>
        <!--v-component-->
        <a class="header-aside-lang">EN</a>
      </div>
      <div class="header-aside header-aside-small">
        <div class="header-aside-dropdown-menu ivu-dropdown">
          <div>
            <a class="header-aside-main" href="javascript:void(0)">
              <i class="ivu-icon ivu-icon-android-more-vertical" style="font-size: 20px; color: rgb(255, 255, 255);"></i>
              <!--v-component-->
            </a>
          </div>
          <div class="ivu-select-dropdown slide-up-transition" style="display: none;">
            <ul class="ivu-dropdown-menu header-aside-dropdown-menu-dropdown" slot="list" style="width: 150px; left: -150px;">
              <li class="ivu-dropdown-item">
                <div class="o-dropdown-item no-badgeStyle">
                  <!--v-start-->
                  <span class="ivu-badge">
                    <i class="td-appfont icon-notifications"></i>
                    <sup class="ivu-badge-dot"></sup>
                  </span>
                  <!--v-if-->
                  <!--v-end-->
                  <!--v-component-->
                  <em>系统通知</em>
                </div>
              </li>
              <!--v-component-->
              <li class="ivu-dropdown-item">
                <div class="header-aside-setting" title="邀请工作伙伴共同查阅数据">
                  <i class="td-appfont icon-authorization"></i>
                  <em>账户授权</em>
                </div>
              </li>
              <!--v-component-->
              <li class="ivu-dropdown-item">
                <div class="o-dropdown-item">
                  <a class="header-aside-lang">EN</a>
                  <em>English</em>
                </div>
              </li>
              <!--v-component-->
            </ul>
            <!--v-component-->
          </div>
          <!--v-component-->
        </div>
        <!--v-component-->
        <div class="header-aside-dropdown-menu ivu-dropdown">
          <div>
            <a class="grant-wrap header-aside-main" href="javascript:void(0)">
              <i class="td-appfont icon-user"></i>
              <i class="ivu-icon ivu-icon-ios-arrow-down"></i>
              <!--v-component-->
            </a>
          </div>
          <div class="ivu-select-dropdown slide-up-transition" style="display: none;">
            <ul class="ivu-dropdown-menu header-aside-dropdown-menu-dropdown" slot="list" style="width: 186px; left: -186px;">
              <i class="td-appfont icon-user"></i>
              <span>Guest</span>
              <div class="ivu-row header-aside-dropdown">
                <button class="ivu-btn ivu-btn-ghost" type="button">
                  <!--v-if-->
                  <!--v-if-->
                  <span>账户中心</span>
                  <!--v-if-->
                </button>
                <!--v-component-->
                <button class="r ivu-btn ivu-btn-ghost" type="button">
                  <!--v-if-->
                  <!--v-if-->
                  <span>退出登录</span>
                  <!--v-if-->
                </button>
                <!--v-component-->
              </div>
              <!--v-component-->
            </ul>
            <!--v-component-->
          </div>
          <!--v-component-->
        </div>
        <!--v-component-->
      </div>
      <div class="header-items">
        <div class="header-nav-wrap clear">
          <button class="header-nav ivu-btn ivu-btn-text ivu-btn-icon-only" type="button">
            <!--v-if-->
            <!--fragment-start-->
            <i class="ivu-icon ivu-icon-navicon"></i>
            <!--v-component-->
            <!--fragment-end-->
            <!--v-if-->
            <!--v-if-->
          </button>
          <!--v-component--><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNHB4IiBoZWlnaHQ9IjY0cHgiIHZpZXdCb3g9IjAgMCA0IDY0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MS4yICgzNTM5NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+bGluZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuNSI+CiAgICAgICAgPGcgaWQ9IuW6lOeUqOamguiniCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyOC4wMDAwMDAsIC00MC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9ImxvZ28iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLjAwMDAwMCwgMzAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0ibGluZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODguMDAwMDAwLCAxMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMiwwIEwyLDIwIiBpZD0iTGluZSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMiw0NCBMMiw2NCIgaWQ9IkxpbmUtQ29weSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBmaWxsPSIjRkZGRkZGIiBjeD0iMiIgY3k9IjMyIiByPSIyIj48L2NpcmNsZT4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" class="header-items-line"> </div>
        <a class="on">
          <i class="category-icon td-appfont icon-analytics"></i>
          <span>应用分析</span>
        </a>
        <!--v-if-->
        <a>
          <i class="category-icon td-appfont icon-push"></i>
          <span>推送营销</span>
        </a>
        <!--v-if-->
        <a>
          <i class="category-icon td-appfont icon-Toolbox"></i>
          <span>开发助手</span>
        </a>
        <!--v-if-->
        <a>
          <i class="category-icon td-appfont icon-management"></i>
          <span>应用管理</span>
        </a>
        <!--v-if-->
      </div>
      <!--v-if-->
      <!--v-start-->
      <div class="fade-transition ivu-modal-mask" style="display: none;"></div>
      <div class="ivu-modal-wrap ivu-modal-hidden">
        <div class="ease-transition ivu-modal" style="width: 520px; display: none;">
          <div class="ivu-modal-content">
            <a class="ivu-modal-close">
              <i class="ivu-icon ivu-icon-ios-close-empty"></i>
              <!--v-component-->
            </a>
            <!--v-if-->
            <!--v-if-->
            <div class="ivu-modal-body"> 设置内容尚未保存！ <br> 如果现在离开，系统将放弃所做的配置或修改，是否确认离开当前页面？ </div>
            <div class="ivu-modal-footer">
              <button class="ivu-btn ivu-btn-text ivu-btn-large" type="button">
                <!--v-if-->
                <!--v-if-->
                <span>取消</span>
                <!--v-if-->
              </button>
              <!--v-component-->
              <button class="ivu-btn ivu-btn-primary ivu-btn-large" type="button">
                <!--v-if-->
                <!--v-if-->
                <span>确定</span>
                <!--v-if-->
              </button>
              <!--v-component-->
            </div>
            <!--v-if-->
          </div>
        </div>
      </div>
      <!--v-end-->
      <!--v-component-->
    </div>
    <div class="nav">
      <Row>
        <Col span="8">
        <Menu :theme="theme2" on-select="route">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-paper"></Icon>
              数据概览
            </template>
            <MenuItem name="1-1">应用概览</MenuItem>
            <MenuItem name="1-2">用户趋势</MenuItem>
            <MenuItem name="1-3">渠道分析</MenuItem>
            <MenuItem name="1-4">留存分析</MenuItem>
            <MenuItem name="1-5">用户质量评估</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-people"></Icon>
              用户探索
            </template>
            <MenuItem name="2-1">用户画像</MenuItem>
            <MenuItem name="2-2">用户分群</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="stats-bars"></Icon>
              用户行为分析
            </template>
            <MenuItem name="3-1">页面访问</MenuItem>
            <MenuItem name="3-2">事件分析</MenuItem>
            <MenuItem name="3-3">转化漏斗</MenuItem>
            <MenuItem name="3-4">灵动分析</MenuItem>
          </Submenu>
        </Menu>
        </Col>
      </Row>
    </div>

    <div class="content">
      <h2>Data</h2>
    </div>

  </div>
</template>
<script>
export default {
  // transition(to, from) {
  //   if (!from) return 'slide-left'
  //   return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  // },
  data() {
    return {
      theme2: 'light'
    }
  },
  methods: {
    route: function(name) {
      console.log(name)
      this.$router.push(name)
    }
  }

}
</script>
