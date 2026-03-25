<svelte:options customElement="wc-table" />

<script lang="ts">
  import { onMount } from 'svelte';

  const { getData = () => Promise.resolve([]) }: { getData?: () => Promise<any[]> } = $props();

  let el: HTMLElement;
  let data: any[] = $state([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com'
    },
    {
      id: 4,
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com'
    }
  ]);

  onMount(() => {
    console.log('wc-table montada');

    getData().then((fetchedData) => {
      console.log('Datos obtenidos: ', fetchedData);
    });
  });

  $effect(() => {
    if (!el) return;

    const host = (el?.getRootNode() as ShadowRoot)?.host;

    (host as any).setData = (item: any) => {
      console.log('setData llamado: ', item);
      data.push(item);
    };
  });

  function onClick(event: MouseEvent) {
    el.dispatchEvent(
      new CustomEvent('onRowClick', {
        detail: event,
        bubbles: true,
        composed: true
      })
    );
  }
</script>

<div bind:this={el}>
  <h1>mi tabla WC</h1>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {#each data as item}
        <tr onclick={onClick}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  table {
    border-collapse: collapse;
    width: 100%;
  }
  th,
  td {
    border: 1px solid #333;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }
</style>
