/**
 * 获取文件后缀名
 * @param {String} filename
 */
export function getExt(filename: string) {
    return filename
        .split('.')
        .pop()
        ?.toLocaleLowerCase()
}

/**
 * 生成随机id
 * @param {*} length
 * @param {*} chars
 */
export function uuid(length?: number, chars?: string): string {
    chars =
        chars ||
        '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    length = length || 16
    let result = ''
    for (let i = length; i > 0; --i)
        result += chars[Math.floor(Math.random() * chars.length)]
    return result
}

/**
 * 浏览器下载静态文件
 * @param {String} name 文件名
 * @param {String} content 文件内容
 */
export function downloadFile(name: string, content: string) {
    if (typeof name == 'undefined') {
        throw new Error('The first parameter name is a must')
    }
    if (typeof content == 'undefined') {
        throw new Error('The second parameter content is a must')
    }

    const eleLink = document.createElement('a')
    eleLink.download = name
    eleLink.style.display = 'none'
    const blob = new Blob([content])
    eleLink.href = URL.createObjectURL(blob)
    document.body.appendChild(eleLink)
    eleLink.click()
    document.body.removeChild(eleLink)
}

/**
 * 对象转化为url参数  {name:'xiaoming',age:11} -> name=xiaoming&age=11
 * @param data
 */
export function objToUrlParams(data: { [index: string]: number | string }) {
    return Object.keys(data)
        .map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
        })
        .join('&')
}

/**
 *深拷贝
 * @export
 * @param {*} obj
 * @returns
 */
export function deepCopy(obj: object) {
    if (typeof obj != 'object') {
        return obj
    }
    if (obj == null) {
        return obj
    }
    return JSON.parse(JSON.stringify(obj))
}

/**
 * 根据属性排序,默认安装降序排列  sortByProperty( [ { name: 'xiaoming', age: 11 }, { name: 'xiaoming1', age: 13 } ], 'age' )
 * @param {Array} arr
 * @param {String} property
 * @param {Boolean} asc  是否按照升序排序
 */
export function sortByProperty<T>(arr: T, property: string, asc = false) {
    if (!Array.isArray(arr) || arr.length <= 1) {
        return arr
    }
    if (asc) {
        arr.sort((r1, r2) => {
            return r1[property] - r2[property]
        })
        return
    }
    arr.sort((r1, r2) => {
        return r2[property] - r1[property]
    })
}
