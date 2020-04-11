<template>
    <div class="container package">
        <div class="row d-flex flex-column">
            <div class="title_banner text-center pr-2 pl-2">
                Paket Hosting Singapura yang tepat
            </div>
            <span class="title_banner_sub text-center pr-2 pl-2"
                >Diskon 40% + Domain dan SSL Gratis untuk anda</span
            >
        </div>
        <div class="row pt-5 no-gutters">
            <div
                class="col-lg-3 d-flex flex-column text-center"
                v-for="item in packages"
                :key="item.id"
            >
                <div
                    class="package-title"
                    :class="{ active: item.active, border: !item.active }"
                >
                    {{ item.title }}
                </div>
                <div
                    class="d-flex flex-column text-center pt-3 pb-3"
                    :class="{
                        active: item.active,
                        border: !item.active,
                        'prevent-border-top': !item.active,
                        'prevent-border-bottom': !item.active
                    }"
                >
                    <span class="package-price-trough"
                        >Rp {{ item.price }}</span
                    >
                    <span class="package-price">
                        Rp
                        <span class="huge-price">{{
                            item.discount_price.split(".")[0]
                        }}</span>
                        <span class="font-weight-bold"
                            >.{{ item.discount_price.split(".")[1] }}</span
                        >/bln
                    </span>
                </div>
                <div
                    class="pt-3 pb-3"
                    :class="{
                        'active-user': item.active,
                        border: !item.active,
                        'prevent-border-bottom': !item.active
                    }"
                >
                    <span class="font-weight-bold">{{ item.pengguna }}</span>
                    Pengguna Terdaftar
                </div>
                <div
                    class="d-flex flex-column text-center pt-3 pb-3"
                    :class="{
                        'active-border': item.active,
                        border: !item.active
                    }"
                >
                    <span class="font-weight-bold">0.5X RESOURCE POWER</span>
                    <span class="pt-1 pb-1">
                        <span class="font-weight-bold">500MB</span> Disk Space
                    </span>
                    <span class="pt-1 pb-1">
                        <span class="font-weight-bold">Unlimited</span>
                        Bandwitdh
                    </span>
                    <span class="pt-1 pb-1">
                        <span class="font-weight-bold">Unlimited</span> Database
                    </span>
                    <span class="pt-1 pb-1">
                        <span class="font-weight-bold">1</span> Domain
                    </span>
                    <span class="pt-1 pb-1">
                        <span class="font-weight-bold">Instant</span> Backup
                    </span>
                    <span class="pt-1 pb-1">
                        <span class="font-weight-bold">Unlimited SSL</span>
                        Gratis Selamanya
                    </span>
                    <button
                        type="button"
                        class="btn mt-3 mb-3 ml-auto mr-auto w-50 rounded-pill"
                        :class="{
                            'btn-primary': item.active,
                            'btn-outline-dark': !item.active
                        }"
                    >
                        <div class="font-weight-bold">Pilih Sekarang</div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import packageData from "../mock/price";
export default {
    name: "Package",
    data() {
        return { isActive: true, packages: [] };
    },
    created() {
        this.fetchPackages();
    },
    computed: {
        discountNumber: function(params) {
            console.log(params);
            return params.splice(".");
        }
    },
    methods: {
        fetchPackages() {
            this.packages = packageData.data;
        }
    }
};
</script>
