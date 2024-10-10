// app.js
import { modal, toast } from './utils/extendApi';
import { asyncSetStorage, asyncGetStorage, asyncRemoveStorage, asyncClearStorage } from './utils/storage';
App({
    async onShow(){
        // wx.showToast({
        //     title: '成功',
        //     icon: 'success',
        //     duration: 2000
        // })   
        // wx.toast({ title:'数据加载完毕',icon:'success'})

        // wx.showModal({
        //     title: '提示',
        //     content: '这是一个模态弹窗',
        //     success (res) {
        //       if (res.confirm) {
        //         console.log('用户点击确定')
        //       } else if (res.cancel) {
        //         console.log('用户点击取消')
        //       }
        //     }
        // })
        //    const res = await wx.modal({
        //        title:'新的提示',
        //        showCancel: false
        //    })
        //    console.log(res);
        // setStorage('name', 'tom')
            // const name = getStorage('name')
            // console.log(name);
        // removeStorage('name')
        // const res = await asyncClearStorage()
        // console.log(res);
    }
})
