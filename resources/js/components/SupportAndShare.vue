<template>
    <div>
        <div class="bg-light">
            <div class="container pt-5 pb-5  text-center">
                <div
                    class="row d-flex justify-content-between align-items-center mr-auto ml-auto"
                >
                    <span class="font-weight-bold"
                        >Bagikan jika anda menyukai halaman ini</span
                    >
                    <div class="socmed d-flex">
                        <div class="d-flex align-items-center pr-1">
                            <font-awesome-icon
                                size="2x"
                                class="mr-1"
                                :icon="['fab', 'facebook-square']"
                                :style="{ color: '#24599B' }"
                            />
                            <div class="count text-center border">800</div>
                        </div>
                        <div class="d-flex align-items-center pr-1">
                            <font-awesome-icon
                                size="2x"
                                class="mr-1"
                                :icon="['fab', 'twitter-square']"
                                :style="{ color: '#00AEF1' }"
                            />
                            <div class="count text-center border">800</div>
                        </div>
                        <div class="d-flex align-items-center pr-1">
                            <font-awesome-icon
                                size="2x"
                                class="mr-1"
                                :icon="['fab', 'google-plus-square']"
                                :style="{ color: '#FC4A35' }"
                            />
                            <div class="count text-center border">800</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-primary text-white">
            <div class="container pt-5 pb-5">
                <div
                    class="row d-flex justify-content-between align-items-center"
                >
                    <span class="title_banner_sub text-white text-center"
                        >Perlu
                        <span class="font-weight-bold">BANTUAN?</span> hubungi
                        kami :
                        <span class="font-weight-bold">0274-5305505</span></span
                    >
                    <button
                        type="button"
                        class="btn btn-outline-light mt-3 mb-3 ml-auto mr-auto rounded-pill"
                    >
                        <div class="font-weight-bold">
                            <font-awesome-icon
                                size="lg"
                                class="navbar_subnav-item-icon mr-2"
                                :icon="['fas', 'comments']"
                            />Live Chat
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
