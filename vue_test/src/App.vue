<template>
    <div>
        <nbr-row>
            <nbr-button round>圆角按钮</nbr-button>
            <nbr-button type="primary" round>主要按钮</nbr-button>
            <nbr-button type="success" round>成功按钮</nbr-button>
            <nbr-button type="info" round>信息按钮</nbr-button>
            <nbr-button type="warning" round>警告按钮</nbr-button>
            <nbr-button type="danger" round>危险按钮</nbr-button>
        </nbr-row>
        <nbr-row>
            <nbr-button icon="el-icon-search" circle></nbr-button>
            <nbr-button type="primary" icon="el-icon-finished" circle></nbr-button>
            <nbr-button type="success" icon="el-icon-check" circle></nbr-button>
            <nbr-button type="info" icon="el-icon-message" circle></nbr-button>
            <nbr-button type="warning" icon="el-icon-star-off" circle></nbr-button>
            <nbr-button type="danger" icon="el-icon-delete" circle></nbr-button>
        </nbr-row>
    </div>
</template>

<script>
    export default {
        name:'App',
    }
</script>
