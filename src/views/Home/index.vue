<script setup>
    import HomeCategory from './components/HomeCategory.vue'
    import HomeBanner from './components/HomeBanner.vue'
    import HomeNew from './components/HomeNew.vue'
    import HomeHot from './components/HomeHot.vue'
    import homeProduct from './components/HomeProduct.vue'
    import HomePanel from './components/HomePanel.vue'
</script>

<template>
    <div class="container">
        <HomeCategory />
        <HomeBanner />
    </div>
    <HomeNew />
    <HomeHot />
    <homeProduct />

    <!-- 测试面板组件 -->
    <HomePanel title="新鲜好物" sub-title="更多商品">
    </HomePanel>

    <HomePanel title="新鲜好物1" sub-title="更多商品1">
    </HomePanel>
</template>