<template>
    <div id="app">
        <Header />
        <Feature />
        <Package />
        <Powerfull />
        <Included />
        <SupportLaravel />
        <FullModule />
        <StableHosting />
        <SupportAndShare />
        <Footer />
    </div>
</template>

<script>
import Header from "./components/Header";
import Feature from "./components/Feature";
import Package from "./components/Package";
import Powerfull from "./components/Powerfull";
import Included from "./components/Included";
import SupportLaravel from "./components/SupportLaravel";
import FullModule from "./components/FullModule";
import StableHosting from "./components/StableHosting";
import SupportAndShare from "./components/SupportAndShare";
import Footer from "./components/Footer";

export default {
    name: "App",
    components: {
        Header,
        Feature,
        Package,
        Powerfull,
        Included,
        SupportLaravel,
        FullModule,
        StableHosting,
        SupportAndShare,
        Footer
    }
};
</script>
