# bill-h5
## 启动项目
1. `npm install`
2. `npm run dev`

## 项目适配
单位统一用`rem`不用`px`，`1rem = 100 px`

## 字体图标
本项目采用`symbol`方式使用字体图标，只需引入从`iconfont`项目中下载的`iconfont.js`文件，放在`/public/`下。为了方便使用，封装了一个`src/components/common/Icon.vue`组件，并用`Vue.component`注册成全局组件，可直接在`vue`的`template`中使用。
```html
    <Icon type="icontishi" size="100px" color="red"></Icon>
```

## 开发规范
### `typescript`命名规范
* `interface`
    以`I`开头，如`IUserData`
* `enum`
    以`E`开头，如`EUserData`
* `type`
    以`T`开头，如`TUserData`
* `class`
    以`C`开头，如`CUserData`

### 文件命名规范
* `ts、scss`文件以小写单词命名，如`index.ts`，尽量不要出现组合单词（如：`userinfo.ts`），如果一定要有的话就写小驼峰（如：`userInfo.ts`)
* `vue`文件以大驼峰形式命名，如`Home.vue`、`LocationPicker.vue`
* 图片文件以小写单词加中划线的形式命名，尽量语义化，如：`home-header-bg.png`
* 文件夹命名：一级目录下的文件夹尽量用小写命名，二级菜单下命名根据习惯，不做硬性要求，通常页面文件夹用大驼峰，组件文件夹用`components`命名

### 文件组织规范
* 页面
    所有页面都建一个文件夹存放，文件夹统一放到`/src/views`中，文件夹结构如：
    |-Home
    |  |-Home.vue
    |  |-components
    |  |  -Header.vue
    |  |  -Footer.vue
    |  |-index.ts
* 组件
    1. 工具类组件放在`src/components/common`中，如`LocationPicker.vue`
    2. 业务相关组件分情况：
        1) 只被引用一次（匹配场景：页面文件太大，将一部分拆分成组件）的组件直接放在页面文件件下的`components`文夹中，如上述的`Home`页面下的`Header.vue`组件
        2) 被引用多次，但是跟业务有关，比如只会在铃音模块才需要用到的组件，就在`src/components`下建一个`ring`文件夹，然后在`src/components/ring`下新建组件文件。
        3) 业务组件最好语义化命名，否则容易造成命名冲突，不方便自动导入，比如上述的`Home/components/Header.vue`最好改为`HomeHeader.vue`，不做强制要求

### git提交规范
* feat：新功能
* fix：修补bug
* docs：文档
* style：样式
* refactor：重构
* test：增加测试
如： 
```js
    feat：项目初始化完成
    1. 初始化axios
    2. 初始化iconfont并封装Icon组件
    3. 初始化router
    4. 初始化components
    5. 完成README.md文件
```

## 提升效率

1. `vuex`使用
    由于目前的框架所致，使用`vuex`中的模块相对比较麻烦，使用方式如下：
    ```js
        import { getModule } from 'vuex-module-decorators'
        import UserModule from '@/store/modules/user'
        const UserStore = getModule(UserModule)
        console.log(UserStore.userId)
    ```
    因此，在`/src/store/modules`下新建`module.ts`文件，用于导出所有`vuex`模块，方便在其他文件中直接使用：
    ```js
        //module.ts
        import { getModule } from 'vuex-module-decorators'
        import UserModule from '@/store/modules/user'
        export const UserStore = getModule(UserModule)
        //Home.vue
        import { UserStore } from '../../store/modules/module'
        console.log(UserStore.userId)
    ```

## Last

大家在开发过程中有好的想法和用法可随时更新此文件，并通知其他成员给你点赞-_-

