package com.projetointegrador.Ecommerce.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;



@Entity
@Table(name = "tb_Usuario")
public class Usuario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
			
	@NotNull
	@Size(min = 2, max = 255)
	private String nome;
	
	@NotNull
	@Size(min = 2, max = 255)
	private String email;
	
	@NotNull
	@Size(min = 5, max = 100)
	private String usuario;
	
	@NotNull
	@Size(min = 2, max = 255)
	private String tipo;
	
	@NotNull
	@Size(min = 2, max = 255)
	private String senha;

	
//	@OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL)
//	@JsonIgnoreProperties("usuario")
//	private List<Produto> produto;
	
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	
	
	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

//	public List<Produto> getProduto() {
//		return produto;
//	}
//
//	public void setProduto(List<Produto> produto) {
//		this.produto = produto;
//	}

	
	
	
}