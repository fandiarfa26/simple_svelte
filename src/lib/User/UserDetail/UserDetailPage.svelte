<script lang="ts">
  import Header from "../../components/Header.svelte";
  import ContainerWrapper from "../../components/ContainerWrapper.svelte";
  import Breadcrumb from "../../components/Breadcrumb.svelte";
  import { titleApp } from "../../../constants";
  import UserDetailCard from "./components/UserDetailCard.svelte";

  export let id;

  $: {
    document.title = "Detail User - " + titleApp;
  }
</script>

<main>
  <Header />
  <ContainerWrapper>
    <Breadcrumb
      items={[{ path: "/users", label: "List User" }, { label: "Detail User" }]}
    />
    <UserDetailCard {id} />
  </ContainerWrapper>
</main>
